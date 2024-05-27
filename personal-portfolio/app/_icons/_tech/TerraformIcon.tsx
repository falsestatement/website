const TerraformIcon = () => {
    return (
        <svg
            width="45"
            height="49"
            viewBox="0 0 45 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_340_973)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.4294 7.96975L27.7299 14.0141V26.1028L17.4294 20.0584V7.96975ZM28.8601 14.0141V26.1028L39.1658 20.0584V7.96975L28.8601 14.0141ZM6 1.22278V13.3118L16.3008 19.3558V7.26712L6 1.22278ZM27.7299 27.4283L17.4294 21.3839V33.4687L27.7299 39.5134V27.4283Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_340_973"
                    x="0.9"
                    y="0.122778"
                    width="43.366"
                    height="48.4905"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2.55" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.47 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_340_973"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_340_973"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default TerraformIcon;
