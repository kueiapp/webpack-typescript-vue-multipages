// import css in global usage
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'
import './assets/agency.css'
// import './assets/my.css'

// loading scss file
import './assets/_my.scss'

// import jquery here is useless, it needs to import in each .vue file
// import $ from 'jquery'

export default function() {
	console.log("import vendors")
}