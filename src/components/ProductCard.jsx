function ProductCard({ product }) {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <small>
                {product.category} / {product.subCategory} / {product.subSubCategory}
            </small>
        </div>
    );
}
export default ProductCard;