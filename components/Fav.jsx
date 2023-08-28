function Fav({ idle, isFavorite }) {
  return (
    <svg
      id="Capa_2"
      className={`group/item h-10 w-10 cursor-pointer transition-all duration-200 origin-center `}
      data-name="Capa 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 743.49 730.87"
    >
      <g id="Capa_1-2" data-name="Capa 1">
        <g>
          <path
            className={`sm:group-hover/item:animate-spin-slow sm:group-hover/item:fill-[#0D1118] origin-center transition-all duration-200 fill-[#0D1118]
            ${idle ? 'animate-spin-slow' : ''}
            ${
              isFavorite !== undefined
                ? isFavorite
                  ? 'fill-[#0D1118] animate-spin-slow'
                  : 'fill-slate-600'
                : ''
            }
            `}
            d="m231.63,651.14h0c-20.95-42.21-61.46-71.47-108.31-78.24h0c-117.99-17.05-165.1-161.2-79.72-243.94h0c33.9-32.86,49.37-80.19,41.37-126.59h0C64.81,85.54,188.15-3.55,293.68,51.61h0c41.91,21.9,91.97,21.9,133.88,0h0c105.53-55.16,228.87,33.93,208.72,150.76h0c-8,46.39,7.47,93.73,41.37,126.59h0c85.38,82.74,38.26,226.9-79.72,243.94h0c-46.85,6.77-87.36,36.03-108.31,78.24h0c-52.77,106.3-205.22,106.3-257.99,0Z"
          />
          <path
            className={`sm:group-hover/item:animate-spin sm:group-hover/item:fill-[#0D1118] origin-center transition-all duration-200 fill-[#0D1118]
            ${idle ? 'animate-spin-slow' : ''}
            ${
              isFavorite !== undefined
                ? isFavorite
                  ? 'fill-[#0D1118] animate-spin-slow'
                  : 'fill-slate-600'
                : ''
            }

            `}
            d="m79.71,481.35h0c15.03-44.66,7.08-93.99-21.26-131.91h0c-71.38-95.48-2.76-230.73,116.12-228.87h0c47.21.74,91.62-21.79,118.76-60.26h0c68.36-96.86,218.57-72.65,254.19,40.98h0c14.14,45.12,49.54,80.52,94.66,94.67h0c113.63,35.62,137.84,185.83,40.98,254.19h0c-38.46,27.15-61,71.56-60.26,118.76h0c1.86,118.88-133.38,187.5-228.87,116.12h0c-37.92-28.34-87.24-36.3-131.91-21.26h0c-112.47,37.85-220.28-69.95-182.42-182.42Z"
          />
          <path
            className={`sm:group-hover/item:animate-spin-slow sm:group-hover/item:fill-primary   origin-center transition-all duration-200 fill-primary
            ${idle ? 'animate-spin-slow' : ''}
            ${
              isFavorite !== undefined
                ? isFavorite
                  ? 'fill-primary animate-spin-slow'
                  : 'fill-slate-600'
                : ''
            }
            `}
            d="m291.84,525.92h0c-11.17-22.51-32.77-38.11-57.75-41.72h0c-62.92-9.09-88.04-85.96-42.51-130.08h0c18.08-17.52,26.33-42.76,22.06-67.5h0c-10.75-62.3,55.02-109.81,111.3-80.39h0c22.35,11.68,49.04,11.68,71.39,0h0c56.27-29.41,122.04,18.09,111.3,80.39h0c-4.27,24.74,3.98,49.98,22.06,67.5h0c45.53,44.12,20.4,120.99-42.51,130.08h0c-24.98,3.61-46.58,19.21-57.75,41.72h0c-28.14,56.68-109.43,56.68-137.57,0Z"
          />
        </g>
      </g>
    </svg>
  );
}
export default Fav;
