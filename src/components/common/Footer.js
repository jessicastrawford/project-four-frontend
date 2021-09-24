function Footer() {
  return (
    <section className="footer">
      <ul className="footer-list">
        <li className="design-feed">{`© ${new Date().getFullYear()} Design Feed`}</li>
        <li className="made-by"><a href='https://github.com/jessicastrawford' target="_blank" rel="noreferrer" >Made by Jessica Strawford</a></li>
      </ul>
    </section>

  )
}

export default Footer