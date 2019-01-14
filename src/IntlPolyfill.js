import { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * @name IntlPolyfill
 * @description
 * `IntlPolyfill` component will lock the rendering of your application
 * if it found that `window.Intl` is not in the user browser.
 * Instead it will load with ajax a `window.Intl` polyfill [intl](https://www.npmjs.com/package/intl) before the rendering.
 * It must be used before any usage of `window.Intl` in your application
 */
export default class IntlPolyfill extends PureComponent {
  static propTypes = {
    /** Children is the polyfill environment, you should not use Intl out of it if you use this */
    children: PropTypes.any.isRequired,
    /** List of 2 letter locale code used by the application.
     * It will load locale related polyfill
     * see https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1
     */
    locales: PropTypes.array,
    /** fallback component when loading intl support */
    fallback: PropTypes.any,
  };

  static defaultProps = {
    locales: [],
    fallback: null,
  };

  state = {
    hasSupport: !!window.Intl,
  };

  componentWillMount() {
    const { locales } = this.props;
    const { hasSupport } = this.state;
    if (!hasSupport) {
      this.polyfill(locales);
    }
  }

  polyfill = (locales) => new Promise((resolve) => resolve(import('intl')))
    .then(() => Promise.all(locales.map((locale) => import(`intl/locale-data/jsonp/${locale}.js`)))) // eslint-disable-line prettier/prettier
    .then(() => this.setState({ hasSupport: true }))
    .catch((err) => { throw err; });

  render() {
    const { children, fallback } = this.props;
    const { hasSupport } = this.state;
    return hasSupport ? children : fallback;
  }
}
