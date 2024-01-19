const PostCard = ({ img, nama, tanggal, judul, konten, topik,  }) => {
  return (
    <>
      <div className="p-4 rounded-3 mb-3" id="listKonten" >
        <div className="d-flex align-items-center gap-3 mb-3" id="postCard">
          {/* Image */}
          <img src={img} alt="Profile" className="rounded-circle" style={{ width: '50px', height: '50px' }} />
          <div>
            {/* nama, tanggal */}
            <p className="mb-0 fw-bold custom-text ">{nama}</p>
            <p className="mb-0 text-muted">{tanggal}</p>
          </div>
        </div>
        <div>
          {/* judul dan isi content */}
          <h3 className="custom-text">{judul}</h3>
          <p>{konten}</p>
          {/* topik */}
          <a href="" className="custom-btn fw-bold d-inline-flex text-decoration-none text-white active align-items-center px-2 rounded-2">
            {topik}
          </a>
        </div>
        {/* button comment */}
        <div className="d-flex mt-4 gap-2 justify-content-end">
          <a href="#">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="mdi:message-reply">
                <path
                  id="Vector"
                  d="M27.5 5C27.5 4.33696 27.2366 3.70107 26.7678 3.23223C26.2989 2.76339 25.663 2.5 25 2.5H5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5V20C2.5 20.663 2.76339 21.2989 3.23223 21.7678C3.70107 22.2366 4.33696 22.5 5 22.5H22.5L27.5 27.5V5Z"
                  fill="#AAAAAA"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default PostCard;
