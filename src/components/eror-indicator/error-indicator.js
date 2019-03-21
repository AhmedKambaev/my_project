import React from 'react';

const ErrorIndicator = () => {
  return (
      <div className="ui icon message">
        <i className="inbox icon"></i>
        <div className="content">
          <div className="header">Извините произошла ошибка!</div>
          <p>Попробуйте перезагрузить приложение</p>
        </div>
      </div>
  );
};

export default ErrorIndicator;