import React from 'react'
import styles from './Search.module.scss'

const Search = () => {
  return (
    <div>
      <svg
        height="64px"
        id="SVGRoot"
        version="1.1"
        viewBox="0 0 64 64"
        width="64px"
        <defs id="defs3848" />
        <g id="layer1">
          <g id="g5183" style="stroke:#000000" transform="translate(25.5,-27)">
            <circle
              class="fil0 str1"
              cx="0.73810571"
              cy="53.392174"
              id="circle15"
              r="20.063322"
              style="clip-rule:evenodd;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.00005412;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision"
            />
            <line
              class="fil0 str2"
              id="line25"
              style="clip-rule:evenodd;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.99974346;stroke-linecap:round;stroke-linejoin:round;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision"
              x1="15.617603"
              x2="30.305107"
              y1="68.559662"
              y2="83.151169"
            />
            <path
              class="fil0 str0"
              d="m -12.701441,53.392174 c 0,-7.391751 6.047795,-13.439547 13.43954602,-13.439547"
              id="path281"
              style="clip-rule:evenodd;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.00005412;stroke-linecap:round;stroke-linejoin:round;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision"
            />
          </g>
        </g>
      </svg>
      <input className={styles.root} placeholder="Поиск пиццы..." />
    </div>
  )
}
export default Search
