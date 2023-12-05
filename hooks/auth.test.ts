import { renderHook } from "@testing-library/react-hooks";
import { AuthProvider } from "../components/Auth";
import { useAuth } from "./auth";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

beforeEach(() => {
  console.error = jest.fn();
});

//mock localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("useAuth", () => {
    
  test("useAuth throws error outside AuthProvider", () => {
    const { result } = renderHook(() => useAuth());

    // Espera que arroje un error
    expect(() => result.current).toThrow(
      "useAuth must be used within an AuthProvider"
    );
  });

  test("useAuth returns context within AuthProvider", () => {
    // mock localStorage token
    localStorageMock.setItem('token', "fake token");

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    expect(result.current).toBeDefined();
    expect(result.current.token).toBe("fake token");
  });
});
