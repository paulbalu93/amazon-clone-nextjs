import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import { Provider as ProviderAuth } from 'next-auth/client';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ProviderAuth session={pageProps.session}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ProviderAuth>
	);
};

export default MyApp;
