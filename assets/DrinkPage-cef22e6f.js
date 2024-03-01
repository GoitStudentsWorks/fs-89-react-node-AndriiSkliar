import{u as j,a as u,b as s,v,r as w,e as y,w as _,j as i,Q as N,L as z,B as p,x as D,d as S}from"./index-44568db6.js";import{T as A}from"./Title-bb9d294d.js";import F from"./ErrorPage-bcf15580.js";import{j as T,b as C,a as E,c as P}from"./drinks.selectors-cc3f5dd0.js";import"./NotFound-cd6a6e6c.js";const L=j.div`
  .container-page {
    margin: 0 auto;
    max-width: 375px;
    padding: 80px 20px;
  }

  .desc-glass-alco {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.16667;
    color: var(--secondary-text-color);
    margin-top: 8px;
  }

  .desc-drink {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--primary-text-color);
    margin-top: 20px;
  }

  .btn-add-rem-fav {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--link-text);
    border-radius: 42px;
    border: none;

    padding-top: 14px;
    padding-bottom: 14px;

    width: 222px;
    height: 46px;
    background: var(--link-bg);
    margin-top: 40px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .btn-add-rem-fav:hover,
  .btn-add-rem-fav:focus {
    color: var(--link-bg-hover);
    background: var(--link-text);
  }

  .img-drink {
    object-fit: cover;
    object-position: top;
    border-radius: 8px;
    width: 335px;
    height: 400px;
    margin-top: 80px;
  }

  .title-sect-ingred {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    color: var(--secondary-text-color);
    margin-top: 18px;
  }

  .ingred-list {
    display: flex;
    row-gap: 20px;
    column-gap: 21px;
    flex-wrap: wrap;
    margin-top: 42px;
  }

  .ingred-descr {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
  }

  .ingred-name {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--primary-text-color);
  }

  .ingred-quantity {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--secondary-text-color);
  }

  .ingred-item {
    width: 157px;
    height: 183px;
  }

  .img-container {
    width: 157px;
    height: 157px;
    padding: 25px;
    background: var(--ingredient-bg);
    border-radius: 8px;
  }

  .img-ingred {
    width: 107px;
    height: 107px;
  }

  .descr-drink-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: var(--primary-text-color);
    margin-top: 80px;
  }

  .recipe-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--primary-text-color);
    margin-top: 40px;
  }

  .img-three-drinks {
    border-radius: 11px;
    width: 335px;
    height: 430px;
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    .container-page {
      max-width: 768px;
      padding: 140px 32px;
    }

    .img-drink {
      width: 704px;
    }

    .title-sect-ingred {
      margin-top: 80px;
    }

    .img-three-drinks {
      width: 704px;
    }
  }

  @media screen and (min-width: 1280px) {
    .container-page {
      max-width: 1280px;
      padding: 158px 100px 140px 100px;
    }

    .drink-container {
      display: flex;
      justify-content: space-between;
    }

    .img-drink {
      width: 400px;
      margin-top: 0px;
    }

    .ingred-list {
      row-gap: 35px;
      column-gap: 35px;
    }

    .desc-drink {
      width: 600px;
    }

    .descr-drink-title {
      margin-top: 100px;
    }

    .title-sect-ingred {
      margin-top: 100px;
    }

    .recipe-container {
      display: flex;
      flex-direction: row-reverse;
      column-gap: 60px;
      justify-content: flex-end;
    }

    .img-three-drinks {
      min-width: 631px;
      height: 480px;
    }
  }

  @media screen and (min-width: 768px) {
    .desc-glass-alco {
      font-size: 16px;
      line-height: 1.25;
    }

    .desc-drink {
      font-size: 16px;
      line-height: 1.375;
    }

    .btn-add-rem-fav {
      font-size: 16px;
      line-height: 1.125;

      padding-top: 18px;
      padding-bottom: 18px;

      width: 250px;
      height: 54px;
    }

    .ingred-name {
      font-size: 18px;
      line-height: 1.3333;
    }

    .ingred-quantity {
      font-size: 16px;
      line-height: 1.25;
    }

    .ingred-descr {
      margin-top: 14px;
    }

    .ingred-item {
      width: 220px;
      height: 258px;
    }

    .img-container {
      width: 220px;
      height: 220px;
      padding: 22px 23px 23px 22px;
    }

    .img-ingred {
      width: 175px;
      height: 175px;
    }

    .ingred-list {
      row-gap: 22px;
      column-gap: 22px;
      margin-top: 24px;
    }

    .descr-drink-title {
      font-size: 40px;
      line-height: 1.1;
    }

    .recipe-text {
      font-size: 16px;
      line-height: 1.375;
    }
  }
`,R="/fs-89-react-node-AndriiSkliar/assets/drinks_mobile-b94d9f31.jpg",q="/fs-89-react-node-AndriiSkliar/assets/drinks_mobile@2x-cfc7bd4d.jpg",B="/fs-89-react-node-AndriiSkliar/assets/drinks_tablet-ce0a3bb4.jpg",I="/fs-89-react-node-AndriiSkliar/assets/drinks_tablet@2x-2ec4efe3.jpg",Q="/fs-89-react-node-AndriiSkliar/assets/drinks_desktop-0dda4d57.jpg",$="/fs-89-react-node-AndriiSkliar/assets/drinks_desktop@2x-eb8bc799.jpg",a={drinks_mobile:R,drinks_mobile_2x:q,drinks_tablet:B,drinks_tablet_2x:I,drinks_desktop:Q,drinks_desktop_2x:$},c="/fs-89-react-node-AndriiSkliar/assets/dummyDrinkThumb-bcfa1519.png",O=()=>{const r=u(),e=s(T),x=s(C),l=s(E),g=s(P),{id:n}=v(),o=g.some(t=>t._id===n);w.useEffect(()=>{r(y()),r(_(n))},[r,o]);const h=()=>{p("Drink added to favorites",{position:"top-right",autoClose:2e3})},m=()=>{p("Drink removed from favorites",{position:"top-right",autoClose:2e3})},k=t=>{r(D(t))},f=t=>{r(S(t))};return i.jsxs(L,{children:[i.jsx(N,{}),i.jsx("div",{className:"container-page",children:x!==null?i.jsx(F,{}):i.jsxs("div",{children:[l===!0&&i.jsx(z,{}),e!==null&&i.jsxs("div",{children:[i.jsxs("div",{className:"drink-container",children:[i.jsxs("div",{children:[i.jsx(A,{text:e.drink}),i.jsxs("div",{className:"desc-glass-alco",children:[i.jsx("span",{children:e.glass}),i.jsx("span",{children:" / "}),i.jsx("span",{children:e.alcoholic})]}),i.jsx("p",{className:"desc-drink",children:e.description}),o?i.jsx("button",{className:"btn-add-rem-fav",onClick:()=>{f(n),m()},children:"Remove from favorites"}):i.jsx("button",{className:"btn-add-rem-fav",onClick:()=>{k(n),h()},children:"Add to favorite drinks"})]}),i.jsx("img",{className:"img-drink",src:e.drinkThumb?`${e.drinkThumb}`:c,alt:e.drink})]}),i.jsx("h2",{className:"title-sect-ingred",children:"Ingredients"}),i.jsx("ul",{className:"ingred-list",children:e.ingredients.map(({ingredientId:t,title:d,measure:b})=>i.jsxs("li",{className:"ingred-item",children:[i.jsx("div",{className:"img-container",children:i.jsx("img",{className:"img-ingred",src:t&&t.ingredientThumb?t.ingredientThumb:c,alt:d})}),i.jsxs("div",{className:"ingred-descr",children:[i.jsx("span",{className:"ingred-name",children:d}),i.jsx("span",{className:"ingred-quantity",children:b})]})]},d))}),i.jsx("h2",{className:"descr-drink-title",children:"Recipe Preparation"}),i.jsxs("div",{className:"recipe-container",children:[i.jsx("p",{className:"recipe-text",children:e.instructions}),i.jsxs("picture",{children:[i.jsx("source",{srcSet:a.drinks_desktop,type:"image/jpg",media:"(min-width:1200px)",width:"631px",height:"480px"}),i.jsx("source",{srcSet:a.drinks_tablet,type:"image/jpg",media:"(min-width:768px)",width:"704px",height:"430px"}),i.jsx("source",{srcSet:a.drinks_mobile,type:"image/jpg",media:"(min-width:280px)",width:"335px",height:"430px"}),i.jsx("img",{src:a.drinks_mobile,alt:"three drinks",className:"img-three-drinks"})]})]})]})]})})]})};export{O as default};
