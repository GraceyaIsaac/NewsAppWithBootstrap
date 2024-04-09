import defaultimage from '../assets/newsImage.jpg'
export const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px" }}>
    <img
        src={src || defaultimage}  // Use the `src` if it exists; otherwise, use `defaultImage`
        style={{ height: "200px", width: "325px", objectFit: "cover" }} // Apply style to fit the image in the card
        className="card-img-top"
        alt="..."
      />  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Explore the latest headlines and dive into captivating stories from around the globe. Stay informed, stay engaged, and uncover the world's most compelling narratives with just a click. Experience the power of knowledge at your fingertips – because every story holds the potential to inspire, intrigue, and enlighten."}</p>
    <a href={url} className="btn btn-primary">Read More!!</a>
  </div>
</div>
  )
}
