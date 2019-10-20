import React from 'react';

const NavBar = ( { totalCounters } ) => {

    console.log("NavBar - Rendered");
    
    return ( 
        <div>
                <nav className = "navbar navbar-light bg-light">
					<a className = "nav-brand" href = "#">
					NavBar
                    <span className = "badge badge-pill badge-secondary m-2"> { totalCounters } </span>
					</a>
				</nav>
            </div>
     );
}
 
export default NavBar;

// class NavBar extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <div>
//                 <nav className = "navbar navbar-light bg-light">
// 					<a className = "nav-brand" href = "#">
// 					NavBar
//                     <span className = "badge badge-pill badge-secondary m-2">{this.props.totalCounters}</span>
// 					</a>
// 				</nav>
//             </div>
//          );
//     }
// }
 
// export default NavBar;