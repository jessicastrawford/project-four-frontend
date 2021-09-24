// import StackGrid from 'react-stack-grid'
import React from 'react'
import Masonry from 'react-masonry-component'
import ScrollButton from './ScrollButton'
import { useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'

// const { scaleDown } = transitions

function Home() {

  const photos = [
    {
      imageUrl: 'https://assets.vogue.com/photos/5d9663603b257600087ff805/master/pass/00-promo%20(5).jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/a3/4a/8b/a34a8b4b2650b3c948e4279d7f02c82b.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/55/9b/5c/559b5cbdfea3c1081d9ca60559d96b79.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/03/92/4a/03924ac11939c8871130c964df35ff76.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/38/76/25/3876259b31d2ca5c67d2df9821bad64b.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/1d/4f/c8/1d4fc828884c5c0dd50a5e3bca70be67.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/69/3c/bf/693cbf7fc0147b14abe4e01cbed24f8d.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/c9/d8/b8/c9d8b8ed239d1e723736fb61cf21e089.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/83/4c/29/834c29e4d43d228cce70856fd558ea2d.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/99/32/10/993210d6777ba868b3c00b8fd6f6a06e.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/b2/31/6c/b2316c039212cf01a9a66cafdddbd981.jpg',
    },
    {
      imageUrl: 'https://bcuportfolio.com/wp-content/uploads/2020/05/left.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/cd/f6/dc/cdf6dc75c1ce7f68e6de4b189aa63c6d.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/2a/97/d7/2a97d7b4d3c07ce94d87cd3191ce540c.jpg',
    },
    {
      imageUrl: 'https://assets.vogue.com/photos/5ee138338b3822ed76d9ab58/master/pass/08-burberry-backstage-fw20-corey-tenold.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/7e/f6/ac/7ef6ac64e3ef76f266ceb02465e02005.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/17/89/9b/17899b00fe57a0fe920410f630400803.jpg',
    },
    {
      imageUrl: 'https://cdn.cliqueinc.com/posts/285204/milan-fashion-week-fall-winter-2020-285204-1582669483718-main.700x0c.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/1a/f9/54/1af954d6e6005c10d2d0702af570fe29.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/62/19/38/6219383010f7e2e14d766974c003d99a.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/55/ac/4c/55ac4cd9e645d0acf62183ac1e835925.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/70/c4/91/70c4918febb85b06b951fda1843074f5.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/e1/85/cf/e185cf6fe97dcedf77f00c23b02457b0.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/76/b5/68/76b5683da161cfee178630fbc1524527.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/25/94/2f/25942fa6ee8449801f9c1b2d2b801559.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/2f/ab/41/2fab4150bd82565b6caf592c9d6b9232.jpg',
    },
    {
      imageUrl: 'https://assets.vogue.com/photos/5e667015caf8810008f1d1c2/3:4/w_450,h_600,c_limit/00_promo%20(5).jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/94/95/d8/9495d80b9dbcbc28550c967c80daf76b.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/f0/f8/00/f0f800f270331bc295e43aa0bae34968.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/a1/f0/e4/a1f0e4d04a0e677473229700a00bc7ab.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/7c/d0/50/7cd050ec666fe1d9d88658b60234a6b9.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/00/ea/9c/00ea9c5ef7bd7b980fed6011654a5883.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/41/68/43/4168434131d0ab785af1f1edaa7a1f56.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/14/fd/bf/14fdbf0547039b0a1a4d3cf0dae28c04.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/7d/8c/4d/7d8c4d69be898a7c34d0009270a75dda.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/8b/4a/18/8b4a18c1811b67528cd468a542671d81.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/71/9d/41/719d4116778e6378a37f10d256ed91bc.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/aa/99/89/aa9989abd356886e8fc8f99fb5f9a44a.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/24/4c/49/244c493f44ce1546f533c338da49b0b2.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/86/bc/5e/86bc5ea71c09ca38dd1e7418edd5c4f7.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/ba/c4/b2/bac4b210f6651df22b3b1c47aab3f997.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/originals/78/c5/a3/78c5a32bfa07fdd4309cb1e8c1ffdbd4.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/a8/14/66/a81466365ce9ebbed743e6cd1c0fce10.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/1e/81/19/1e811988d12188c2f6dcb9fdcddcae86.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/4d/81/6d/4d816d30a13de10184f008bc0d12cba5.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/d9/2e/15/d92e15af1f379ee575b48e23285e8eec.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/d8/15/d6/d815d66322ae12b238f3b7fbfdb7ead5.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/0d/cc/d0/0dccd085ce34bb23d6c5e35f1eb24bad.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/37/d6/2d/37d62d57d56d62dadb9c0a5c8109c6f9.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/99/ae/07/99ae07a6597a94a2d90729396e6615b0.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/2e/77/2e/2e772ec486bc4109b0e65513b51cd22a.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/1d/77/73/1d77737a7ea54bf9cdf98ff09eecf0f9.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/cd/3c/a3/cd3ca3859be33fa4111d56b2a45289de.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/3f/b8/92/3fb892c37f09942fed9de246d0db3888.jpg',
    },
    {
      imageUrl: 'https://images.milledcdn.com/2020-02-24/yT22np2ddMsU1mtk/LZN5x6EpyY6r.jpg',
    }





  ]

  const masonryOptions = {
    fitWidth: false,
    columnWidth: 300,
    gutter: 30,
    itemSelector: '.photo-item',
  }

  const history = useHistory()

  const handleClick = () => {
    history.push('/sign-up')
  }

  const isLoggedIn = isAuthenticated()
  useLocation()

  return (
    <section className="home-page">
      {!isLoggedIn && 
      <div className="scroll-button">
        <p>Want to sign up to Design Feed?</p>
        <ScrollButton className="button"/>
      </div> }
      <div className="gallery-grid">
        <div className="grid">
          <Masonry
            className={'photo-list'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {photos.map((photo) => (
              <li className={'photo-item'} key={photo}>
                <img src={photo.imageUrl} alt={photo} />
              </li>
            ))}
          </Masonry>
        </div>
      </div>
      {!isLoggedIn && 
      <div className="sign-up">
        <p>Sign up to become a member of Design Feed.</p>
        <p>A space where designers can give and recieve feedback on their work.</p>
        <button onClick={handleClick} className="sign-up">Sign up</button>
      </div>
      }
    </section>

  )

}

export default Home

