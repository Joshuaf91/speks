import React from 'react'
import products from './data.js';
import {Modal} from 'react-bootstrap';
import ProductPage from './individual-product-page.js';
import FilterBar from './FilterBar';
import {SplitButton, MenuItem} from 'react-bootstrap';



var CategoryPage = React.createClass({
	getInitialState:function(){
		return{
			display:null,
			showModal: false,
			modalProduct: null,
			filterBar: ["filter-click-change-genderless", "filter-click-change-women", "filter-click-change-men"],
			webImgSrc: ["https://s22.postimg.org/smy6gi0xd/genderless_category_header_web.png", "https://s11.postimg.org/cj2bkaggj/women_category_header_web.jpg", "https://s12.postimg.org/ahzbsmnkt/men_category_header_web.jpg"], 
			mobileImgSrc: ["https://s10.postimg.org/qm5xowkqh/genderless_category_header_mobile.png", "https://s16.postimg.org/pq33vk845/women_category_header_mobile.jpg", "https://s9.postimg.org/750a9umpr/men_category_header_mobile.jpg"]
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
				return <div id='niceFont' key={'frames' + index} className='col-xs-12 col-sm-6 col-md-6 col-xl-6'>
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
		// had to set a time out because the state was not updating fast enough and this.displayData was rerendering with old information
		setTimeout(this.displayData, 1);
	},
	componentWillMount:function(){
		this.displayData();
	},
	render(){

		var imgIndex = this.props.params.gender === "n" ? 0 : this.props.params.gender === "w" ? 1 : 2;
		
			return(
					<div>
						<div className="container-home ">
     		 				
          					<div id="home-background-web">
								<img id="category-header-web" src={this.state.webImgSrc[imgIndex]} alt="category" />
							</div>

							<div id="home-background-mobile">
     		 					<img id="category-header-web" src={this.state.mobileImgSrc[imgIndex]} alt="category" />
							</div>

						</div>

						<FilterBar filterColor={this.state.filterBar[imgIndex]} gender={this.props.params.gender}/>

						<div className='container-fluid'>
							<div className='text-center col-xs-12 col-md-12 col-xl-12'>
								<strong>Sort By: </strong>
									<SplitButton title="Price">
										<MenuItem>Under $30</MenuItem>
										<MenuItem>$30 and Above</MenuItem>
									</SplitButton>
									<SplitButton title="Popularity">
										<MenuItem>Most Popular Styles</MenuItem>
										<MenuItem>Copacetic Styles</MenuItem>
										<MenuItem>Uncommon Styles</MenuItem>
									</SplitButton>
							</div>
							<div className='col-xs-12 col-md-12 col-xl-12 '>
								{this.state.display}
							</div>
						</div>

					</div>
				)
	}
})



export default CategoryPage;