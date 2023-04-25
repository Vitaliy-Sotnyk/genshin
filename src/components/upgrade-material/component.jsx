export const UpgradeMaterial = ({ icon, name }) => {
  return (
    <div className="upgrade-materials__element">
      <img className="upgrade-materials__element__backgroung" src={icon} alt={name} />
      <input type="" className="numerical-value" placeholder={0} />
    </div>
  );
};