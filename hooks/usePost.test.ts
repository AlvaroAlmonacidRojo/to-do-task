import { act, renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import usePost from "./usePost";

const axiosMock = new MockAdapter(axios);

const body = {
  username: "Test",
  password: "test",
};

describe("usePost", () => {
  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get data from post data", async () => {
    axiosMock.onPost("/api/login").reply(200, { token: "Fake token" });

    const { result, waitForNextUpdate } = renderHook(() =>
      usePost<{ token: string }>()
    );

    act(() => {
      result.current.postData({ url: "/api/login", body, });
    });

    await waitForNextUpdate();
    expect(result.current.data).toEqual({ token: "Fake token" });
  });

  it("should return error from post data", async () => {
    axiosMock.onPost("/api/login").reply(500, null);

    const { result, waitForNextUpdate } = renderHook(() =>
      usePost<{ token: string }>()
    );

    act(() => {
      result.current.postData({ url: "/api/login", body, });
    });

    await waitForNextUpdate();
    expect(result.current.data).toEqual(null);
    expect(result.current.loading).toEqual(false);
    expect(result.current.error).toEqual('Error');
  });
});
