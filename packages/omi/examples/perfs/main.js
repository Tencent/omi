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
        <table class="table table-striped latest-data">
          <tbody>
            {
              this.databases.map(function(database) {
                return (
                  <tr key={database.dbname}>
                    <td class="dbname">
                      {database.dbname}
                    </td>
                    <td class="query-count">
                      <span class={database.lastSample.countClassName}>
                        {database.lastSample.nbQueries}
                      </span>
                    </td>
                      {
                        database.lastSample.topFiveQueries.map(function(query, index) {
                          return (
                            <td class={ "Query " + query.elapsedClassName}>
                              {query.formatElapsed}
                              <div class="popover left">
                                <div class="popover-content">{query.query}</div>
                                <div class="arrow"/>
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
