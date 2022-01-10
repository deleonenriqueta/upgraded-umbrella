import React from 'react';
import Plus from './ComparisonImages/plusImg.png';
import xImg from './ComparisonImages/xIcon.png';

const OutfitItem = (props) => {
  var price,
      originalPrice,
      styleRed;
  if (props.salePrice) {
    price = `$${props.salePrice}`;
    originalPrice = `$${props.originalPrice}`;
    styleRed = {color: 'red'};
  } else {
    price = `$${props.originalPrice}`;
  }
  return (
    <div className='listItem' >
      <div className='relatedImgBox' >
        <img className='relatedImg' src={props.image}></img>
        <img className='xImg' src={xImg} onClick={() => {props.removeOutfitItem(props.id)}}></img>
      </div>
      <div className='relatedDetails'>
        <div className='category'>{props.category}</div>
        <div className='productName'>{props.name}</div>
        <div className='price' >
          <div className='salePrice' style={styleRed} >{price}</div>
          <div className='originalPrice'>{originalPrice}</div>
        </div>
        <div className='rating'>XXXXX</div>
      </div>
    </div>
  );
}

const Outfit = (props) => {
  if ((props.outfit).length > 0) {
    var outfits = (props.outfit).map((item) =>
      <OutfitItem key={item.id} id={item.id} category={item.category} name={item.name}
                  salePrice={item.salePrice} originalPrice={item.originalPrice} image={item.productImg}
                  removeOutfitItem={props.removeOutfitItem} />
    )
  }
  return (
      <div className='scrollWrapper'>
        <br></br>
        <div id='outfitCarousel'>
          <div className='addItem' onClick={props.updateOutfit}>
          <img className='plusImage' src={Plus} />
          <div className='addToOutfit' >Add To Outfit</div>
          </div>
          {outfits}
        </div>
      </div>
    )
}

export default Outfit;