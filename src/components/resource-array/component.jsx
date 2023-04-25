import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { UpgradeMaterial } from "../upgrade-material";

export const ResourceArray = ({ title, resourceList }) => {
  const upgradeMaterials = useMemo(() => Object.values(resourceList).map(resource => (
    <UpgradeMaterial key={uuidv4()} icon={resource.icon} name={resource.name} />
  )), [resourceList]);

  return (
    <section className="resourse__array">
      <h3 className="resourse__array__title resourse-title">{title}</h3>
      <div className="resourse__array__elements upgrade-materials">
        {upgradeMaterials}
      </div>
    </section>
  );
}