```js
<IntlPolyfill locales={['en', 'fr', 'vi']}>
  This zone support <code>window.Intl</code>
</IntlPolyfill>
```

You can pass a loading component using `fallback` props for those who must use the polyfill, it will be used while loading the polyfill with ajax.

```
<IntlPolyfill locales={['en', 'fr', 'vi']} fallback={<div>Please wait...</div>}>
  This zone support <code>window.Intl</code>
</IntlPolyfill>
```
