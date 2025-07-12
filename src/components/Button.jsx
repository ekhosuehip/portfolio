const Button = ({ text, className, id, src, href, onClick }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        if (onClick) {
          onClick();
          return;
        }

        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } 
        else if (!id && href) {
          window.open(href, '_blank', 'noopener,noreferrer');
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={src} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
