import React from 'react'
import products from './data.js';
import {Modal} from 'react-bootstrap';
import ProductPage from './individual-product-page.js';
import FilterBar from './FilterBar';


var CategoryPage = React.createClass({
	getInitialState:function(){
		return{
			display:null,
			showModal: false,
			modalProduct: null
		}

	},  //modal functionality, closing
	closeModule:function(){
		this.setState({showModal: false,
			modalProduct: null
		}, this.displayData);
	}, //modal functionaility, opening
	takeACLoserLook(event){
		this.setState({
			showModal: true,
			modalProduct: [products[event.target.alt], event.target.alt]
		}, this.displayData);
	}, //dynamic generation of content
	displayData: function(){
		console.log("params",this.props.params)
		console.log("products", products)
		
		var newArr = products.map((element,index) => {
			if(element.gender.indexOf(this.props.params.gender) > -1){
				return index
			}else{
				return undefined
			}
		});
		newArr = newArr.clean(undefined).map((element,index) => {

			if(this.props.params.category && products[element].material.indexOf(this.props.params.category)){
				return undefined;
			}else{
				return <div key={'frames' + index} className='col-xs-12 col-sm-6 col-md-6 col-xl-6'>
							<h5 className='text-center'>{products[element].productName} | <em>{products[element].price}</em></h5>

							<img onClick={this.takeACLoserLook} className='img-responsive glassesImage' src={products[element].imgSrc[0]} alt={element} />
							<Modal show={this.state.showModal}>
								<ProductPage product={this.state.modalProduct} xButton={this.closeModule} changeCart={this.props.changeCart}/>
							</Modal>
				 </div>
			}
		});
		newArr.clean(undefined);
		this.setState({display:newArr});
	},
	componentWillReceiveProps:function(){
		console.log("componentWillReceiveProps")
		this.displayData();
	},
	componentWillMount:function(){
		this.displayData();
	},
	render(){
			return(
					<div>
						<div className="container-home">
     		 
          					<div id="home-background-web">
								<img id="category-header-web" src="https://s22.postimg.org/smy6gi0xd/genderless_category_header_web.png" alt="category" />
							</div>

							<div id="home-background-mobile">
     		 					<img id="category-header-web" src="https://s10.postimg.org/qm5xowkqh/genderless_category_header_mobile.png" alt="category" />
							</div>

						</div>

						<div className='container-fluid'>
							<div className='col-xs-2 col-md-2 col-xl-2'>
								<h5>Sort By:</h5>
								<ul>
									<li>Price</li>
									<li>Popularity</li>
								</ul>
							</div>
							<div className='col-xs-10 col-md-10 col-xl-10 '>
								{this.state.display}
							</div>
						</div>

					</div>
				)
	}
})



export default CategoryPage;