import { Link } from 'react-router-dom'

function DesignIndexCard({ design }) {
  return (
    <section className="design-index-cards">
      <Link to={`/designs/${design.id}`} key={design.id}>
        <figure>
          <img src={design.image} alt={design.name} className="design-index-images"/>
        </figure>
        <div className="design-info">
          <div className="name">{design.name}</div>
          <div className="username">Added by: {design.addedBy.username}</div>
        </div>
        
      </Link>
    </section>
  )
}

export default DesignIndexCard