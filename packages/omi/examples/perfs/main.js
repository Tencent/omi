import { render, define, WeElement } from '../../src/omi'


define('my-app', class extends WeElement {
	databases = []

  loadSamples = ()=> {
		this.databases =  ENV.generateData().toArray()
		this.update()
    Monitoring.renderRate.ping();
    setTimeout(this.loadSamples, ENV.timeout);
  }

  installed() {
    this.loadSamples();
	}

  render() {
		return (
      <div>
        <table className="table table-striped latest-data">
          <tbody>
            {
              this.databases.map(function(database) {
                return (
                  <tr key={database.dbname}>
                    <td className="dbname">
                      {database.dbname}
                    </td>
                    <td className="query-count">
                      <span className={database.lastSample.countClassName}>
                        {database.lastSample.nbQueries}
                      </span>
                    </td>
                      {
                        database.lastSample.topFiveQueries.map(function(query, index) {
                          return (
                            <td className={ "Query " + query.elapsedClassName}>
                              {query.formatElapsed}
                              <div className="popover left">
                                <div className="popover-content">{query.query}</div>
                                <div className="arrow"/>
                              </div>
                            </td>
                          );
                        })
                      }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
		)
	}
})


render(<my-app />, '#dbmon');
