import {GetProductsForPagination} from "../components/get/GetProductsForPagination.jsx";
import CardProduct from "../components/CardProduct.jsx";
import {MainTitle} from "../components/MainTitle.jsx";
import React, { useState } from 'react';

export function Products() {

    const [skip, setSkip]= useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const numberProductShowPerPage = 6;
    const numberOfTotalProductShow = 25;

    const numberOfPage = Math.ceil(numberOfTotalProductShow / numberProductShowPerPage);

   function previousPage() {
       if (skip > 0) {
           setSkip(skip - numberProductShowPerPage);
       }
   }

   function nextPage() {
       if (skip + numberProductShowPerPage < numberOfTotalProductShow) {
           setSkip(skip + numberProductShowPerPage);
       }
   }


    return <>
        <MainTitle title={'Products'}/>
        <GetProductsForPagination skip={skip} limit={6} select={'title,thumbnail'} >
            {(products) => (
                <div className="flex flex-wrap justify-center">
                    {products.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                </div>
            )}
        </GetProductsForPagination>
        <div className="flex justify-around my-3">
            <button className="px-4 py-2 rounded bg-cyan-950 text-white hover:bg-cyan-600 transition duration-300 ease-in-out drop-shadow-md"
                onClick={previousPage}
                disabled={skip === 0} >
                &lt; Previous </button>
            <button  className="px-4 py-2 rounded bg-cyan-950 text-white hover:bg-cyan-600 transition duration-300 ease-in-out drop-shadow-md"
                onClick={nextPage}
                disabled={skip + numberProductShowPerPage >= numberOfTotalProductShow} >
                Next &gt; </button>
        </div>
    </>
}
