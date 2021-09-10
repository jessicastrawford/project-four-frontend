import StackGrid from 'react-stack-grid'

// const { scaleDown } = transitions

function Home() {
  return (
    <section className="gallery-grid">
      <h1> I am the HOME PAGE</h1>
      <div className="grid">
        <StackGrid 
          columnWidth={120}
          // appear={scaleDown.appear}
          // appeared={scaleDown.appeared}
          // enter={scaleDown.enter}
          // entered={scaleDown.entered}
          // leaved={scaleDown.leaved}
        >
          <div key="key1"><img className="grid-image" src="https://assets.vogue.com/photos/5d9663603b257600087ff805/master/pass/00-promo%20(5).jpg" /></div>
          <div key="key2"><img className="grid-image" src="https://assets.vogue.com/photos/5d9663603b257600087ff805/master/pass/00-promo%20(5).jpg"/></div>
          <div key="key3"><img className="grid-image" src="https://assets.vogue.com/photos/5d9663603b257600087ff805/master/pass/00-promo%20(5).jpg"/></div>
        </StackGrid>
      </div>
     
    </section>

  )

}

export default Home