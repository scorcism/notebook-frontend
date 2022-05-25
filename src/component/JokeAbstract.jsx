import React from 'react'

const JokeAbstract = () => {
  return (
    <>
    <div className="joke__container">
      <div className="abstract">
        <h3 className='font-25'>Noteb00k</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse omnis distinctio, fuga dolorum quasi a at vero dignissimos laborum velit voluptatem sint.</p>
      </div>
      <div className="joke">
        <h3 className='font-25'>Joke for you</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum impedit nam perspiciatis autem nesciunt eligendi natus iusto, explicabo numquam temporibus ipsam exercitationem voluptate quae. Magni minus nobis velit facilis delectus?</p>
        <p className='changeJoke hover_underlinebox'>Change Joke</p>
      </div>
    </div>
    </>
  )
}

export default JokeAbstract