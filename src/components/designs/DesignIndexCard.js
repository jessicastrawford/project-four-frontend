function DesignIndexCard({ design }) {
  return (
    <section className="design-index-cards">
      <figure>
        <img src={design.image} alt={design.name} className="design-index-images"/>
      </figure>
      <div className="name">{design.name}</div>
      <div className="name">Added by: {design.addedBy.username}</div>
    </section>
  )
}

export default DesignIndexCard