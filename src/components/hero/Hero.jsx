import React from 'react'
import './hero.scss'
import toBottom from '../../assets/toBottom.svg'
import { CiSearch } from 'react-icons/ci';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero__top">
        <h1>Join the most popular tech companies.</h1>
        <h3>
          We’ve helped over 2,500 job seekers to get into the most popular tech
          teams.
        </h3>
        <img width={11} src={toBottom} alt="" />
      </div>
      <div className="hero__bottom">
        <form action="">
          <button>
            <CiSearch />
          </button>
          <input
            type="text"
            placeholder="Try “Software Developer”"
            name=""
            id=""
          />
        </form>
        <select name="" id="">
          <option value="">New York, USA</option>
          <option value="">Tashkent, UZB</option>
          <option value="">Moscow, RUS</option>
        </select>
        <button>Search Job</button>
      </div>
    </div>
  );
}

export default Hero