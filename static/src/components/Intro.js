var React = require('react');

var Intro = React.createClass({
    render() {
        return (
            <div className="intro">
                <h3>About</h3>
                <p>This is a fun application built to accompany the <a href="http://prakhar.me/docker-curriculum">docker curriculum</a> which is a comprehensive tutorial on getting started with Docker 
                targetted especially at beginners.</p>
                <p>The app is built with Flask on the backend and Elasticsearch is the search engine powering the searches</p>
                <p>The frontend is built with React and the beautiful maps are courtesy of Mapbox.</p>
                <p>If you find the design of the website a bit ostentatious, blame <a href="http://genius.com/Justin-bieber-baby-lyrics">Genius</a> for giving me the idea of using this color scheme.</p>
                <p>Lastly, the data for the food trucks is made available in public domain by <a href="https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat">SF Data</a></p>
            </div>
      )
    }
});

module.exports = Intro;