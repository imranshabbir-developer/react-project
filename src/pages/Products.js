import React from "react";
import Productsdb from "./../data/Productlist";
import Pagination from "../components/Pagination";
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1 className="text-center my-3 fs-3 text-success fw-bolder">LIST OF PRDUCTS</h1>

      <div className="container-fluid specialBackground p-3">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="speialButton btn btn-warning me-4">ALL PRODUCTS</button>
            <button type="button" class="speialButton btn btn-warning mx-2">MEN</button>
            <button type="button" class="speialButton btn btn-warning mx-2">WOMEN</button>
            <button type="button" class="speialButton btn btn-warning mx-2">ELECTRONICS</button>
            <button type="button" class="speialButton btn btn-warning ms-2">JEWELERY</button>            
        </div>
      </div>

      <div className="container-fluid">
        <div className="row my-5">
            
                      {/* side bar  */}
            <div className="col-lg-3 text-start ps-4">              
                <ul className="list-group list-group-flush fw-bold my-3">
                      <li className="list-group-item my-1">Price by Range</li>
                      <li className="list-group-item my-1">Price by Color</li>
                      <li className="list-group-item my-1">Price by Category</li>
                      <li className="list-group-item my-1">Women</li>
                      <li className="list-group-item my-1">Men</li>
                      <li className="list-group-item my-1">Electronics</li>
                      <li className="list-group-item my-1">Jewelery</li>
                      <li className="list-group-item my-1">Mix & Max Range</li>
                      <li className="list-group-item my-1">500 - 1000</li>
                      <li className="list-group-item my-1">1000 - 2000</li>
                      <li className="list-group-item my-1">2000 - 3000</li>
                      <li className="list-group-item my-1">3000 - 5000</li>
                      <li className="list-group-item my-1">5000 - 10000</li>
                </ul>
            </div>



{/* product area  */}
            <div className="col-lg-9">
              
              <div className="row">

                  {Productsdb.map((prod) => {
                      return (
                        <div className="my-3 col-lg-3 col-md-6 col-sm-12">
                          <div className="card" style={{ width: "18rem" }}>

                            <Link to={`/products/${prod.id}`}>
                                <img height={280} width={220} src={prod.image} className="card-img-top" alt="..." />
                            </Link>

                            <div className="card-body">
                              <h5 className="card-title">{prod.title.slice(0,10)}...</h5>
                              <p className="card-text">
                                {prod.description.slice(0,35)}...
                              </p>
                              <a href="#" className="btn btn-outline-dark">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}

              </div>

            </div>

                      <Pagination />

        </div>

      </div>

    </div>
  );
};

export default Products;
