import React from 'react';

function WithPokemonLoading(Component) {
  return function WihLoadingComponent({ isLoading = false, ...props }) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
export default WithPokemonLoading;
