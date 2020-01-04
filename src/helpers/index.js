import axios from 'axios';
import React from 'react';
import { DOMAIN_NAME } from '../config';
import ReactDOM from 'react-dom';
import ApolloClient, { gql } from 'apollo-boost';
import { Route, Redirect } from 'react-router-dom';
import Loading from '../component/Loading';

let client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  headers: {
    Authorization: "Bearer " + localStorage.getItem("Token")
  }
});

export const isAuthen = () => {
  let token = localStorage.getItem("Token");
  if (!token) return false;
  return true;
}

export const postApi = (url, body) => {
  return axios.post(DOMAIN_NAME + url, body, {
    headers: {
      'Authorization': 'JWT ' + localStorage.getItem("Token")
    }
  })
}

export const queryGraphql = (query) => {
  return client.query({
    query: gql`${query}`
  });
}

export const postPublicApi = (url, body) => {
  return axios.post(DOMAIN_NAME + url, body, {
    headers: {
    }
  })
}


export const WaitingComponent = (Component) => {
  return props => (
    <React.Suspense fallback={<Loading />}>
      <Component {...props} />
    </React.Suspense>
  )
}

export const measureElement = element => {
  let DOM = ReactDOM.findDOMNode(element);
  return {
    width: DOM.offsetWidth,
    height: DOM.offsetHeight
  }
}

let _isAuthen = isAuthen();
export function PrivateRouter({ component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        _isAuthen ? (
          React.createElement(component, props)
        ) : (
            <Redirect to={{
              pathname: '/login',
              state: {
                from: props.location
              }
            }} />
          )
      }
    />
  );
}

export function PublicRouter({ component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        _isAuthen ? (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        ) : (
            React.createElement(component, props)
          )
      }
    />
  )
}


export const language = {
  en: {
    locale: 'en-US',
    messages: {
      welcome: 'Welcome to {value}',
      message: 'Message',
      profile: 'Profile',
      setting: 'Setting',
      logout: 'Logout',
      help: 'Help',
      follow: 'Follow',
      friend: 'Friends',
      opensidebar: 'Click to open menu',
      openmessage: 'Click to view your message',
      notification: 'Your notification',
      clicktochat: 'Click to start chat with {name}',
    }
  },
  vn: {
    locale: 'vn',
    messages: {
      welcome: 'Chào mừng đến với {value}',
      message: 'Nhắn tin',
      profile: 'Trang cá nhân',
      setting: 'Cài đặt',
      logout: 'Đăng xuất',
      help: 'Trợ giúp',
      follow: 'Theo dõi',
      friend: 'Bạn bè',
      opensidebar: 'Nhấn để hiển thị menu',
      openmessage: 'Nhấn để xem ai nhắn tin cho bạn',
      notification: 'Thông báo của bạn.',
      clicktochat: 'Nhấn để bắt đầu trò chuyện với {name}'
    }
  }
}