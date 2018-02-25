import Omi from '../../src/index.js'

class App extends Omi.Component {
    install(){
        this.data.databases = []

    }

    loadSamples () {
        this.data.databases =  ENV.generateData().toArray()
        Monitoring.renderRate.ping();
        this.update()
        setTimeout(this.loadSamples.bind(this),ENV.timeout );
    }

    installed () {
        this.loadSamples();
    }

    render() {
        return (
            <div>
                <table className="table table-striped latest-data">
                    <tbody>
                    {
                        this.data.databases.map(function(database) {
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
        );
    }
}

Omi.render(new App(), document.getElementById('dbmon'));