import { WeElement, define } from 'omio'

define('my-html', class extends WeElement {
  
  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children, css, scriptData } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {scripts.map(script => (
            <link key={script} rel="preload" href={script} as="script" />
          ))}
          {<script dangerouslySetInnerHTML={{ __html: scriptData}} />}
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="apple-touch-icon" href="/icon.png" />
          {styles && styles.map(style => (
            <style
              key={style.id}
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />
          ))}
          {css && css.map(style => (
            <style
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.css }}
            />
          ))}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          {scripts.map(script => (
            <script key={script} src={script} />
          ))}
        </body>
      </html>
    );
  }
})
