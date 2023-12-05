import { render } from '@testing-library/react';
import { AuthContext, AuthProvider } from './';
import mockRouter from 'next-router-mock';

jest.mock("next/router", () => jest.requireActual("next-router-mock"));


describe('AuthProvider', () => {
  it('renders children when token is present & keep in the same page', () => {
    mockRouter.push("/")
    const { getByText } = render(
      <AuthContext.Provider value={{ token: 'fakeToken', setToken: jest.fn(), clearToken: jest.fn() }}>
          <div>Content for authenticated user</div>
      </AuthContext.Provider>
    );

    expect(getByText('Content for authenticated user')).toBeDefined();
    expect(mockRouter.asPath).toEqual('/');
  });

  it('renders children when on /login page', () => {
    const { getByText } = render(
      <AuthContext.Provider value={{ token: null, setToken: jest.fn(), clearToken: jest.fn() }}>
        <AuthProvider>
          <div>Content for /login page</div>
        </AuthProvider>
      </AuthContext.Provider>
    );

    expect(getByText('Content for /login page')).toBeDefined();
    
  });

  it('redirects to /login when token is not present', () => {
    mockRouter.push("/")

    render(
      <AuthContext.Provider value={{ token: null, setToken: jest.fn(), clearToken: jest.fn() }}>
        <AuthProvider>
          <div>Content for authenticated user</div>
        </AuthProvider> 
     </AuthContext.Provider>
    );

    expect(mockRouter.asPath).toEqual('/login')
  });
});
