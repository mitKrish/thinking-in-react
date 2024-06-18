import { useState } from "react";

function FilterableProductTable({ products }) {
  const [searchText, setSearchText] = useState("Passion");
  const [inStock, setInStock] = useState(false);
  console.log("searchTextPRD", searchText);
  return (
    <div>
      <SearchBar
        searchText={searchText}
        inStock={inStock}
        onSearchTextChange={setSearchText}
        onInStockChange={setInStock}
      />
      <ProductTable
        products={products}
        searchText={searchText}
        inStock={inStock}
      />
    </div>
  );
}
function ProductTable({ products, searchText, inStock }) {
  console.log("searchText", searchText);
  console.log("inStock", inStock);
  let productsAfterFilter = products;
  if (searchText !== "") {
    productsAfterFilter = productsAfterFilter.filter(
      (product) =>
        product.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
  }
  if (inStock) {
    productsAfterFilter = productsAfterFilter.filter(
      (product) => inStock && product.stocked
    );
  }
  console.log("productsAfterFilter", productsAfterFilter);
  const categories = [
    ...new Set(productsAfterFilter.map((prd) => prd.category)),
  ];
  console.log("categories", categories);

  const productCategory = categories.map((prodCat) => (
    <ProductCategory
      category={productsAfterFilter.filter((prd) => prd.category === prodCat)}
      key={prodCat}
    />
  ));
  console.log("productCategory", productCategory);

  return <>{productCategory}</>;
}

function ProductCategory({ category }) {
  // console.log("category", category);
  const productRow = category.map((product) => (
    <ProductRow product={product} key={product.name} />
  ));
  return (
    <table>
      <tbody>
        <tr>
          <td colSpan="2">{category[0].category}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
        {productRow}
      </tbody>
    </table>
  );
}

function ProductRow({ product }) {
  const productName = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{productName}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function SearchBar({
  searchText,
  inStock,
  onSearchTextChange,
  onInStockChange,
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search Product..."
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      ></input>
      <br />
      <label>
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => onInStockChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
