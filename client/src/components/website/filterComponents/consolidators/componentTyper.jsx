import { useSearch } from "../../../../utils/filterSearch";
import BooleanCheckmark from "../filters/boolean"
import DefaultDropdown from "../filters/dropdown"
import RangeSlider from "../filters/rangeSlider"
import { Grid } from "@mui/material";
import React from 'react';

const ComponentTyper = (props) => {
  let { type, data } = props;
  const {modifyData} = useSearch()
  const renderedComponents = [];
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key];
      if (element.visible === true) {
        if (type === 'dropdown' && element.type === 'dropdown') {
          renderedComponents.push(
            <Grid item key={element.title}>
              <DefaultDropdown
                title={element.title}
                key={element.title}
                dbName={element.path}
                modifyData={modifyData}
                data={element.data}
                options={element.options}
              />
            </Grid>
          );
        } else if (type === 'range' && element.type === 'range') {
          renderedComponents.push(
            <Grid item key={element.title}>
              <RangeSlider
                title={element.title}
                key={element.title}
                dbName={element.path}
                modifyData={modifyData}
                data={element.data}
                toggleData={element.visible}
                limits={element.limits}
                step={element.step}
              />
            </Grid>
          );
        } else if (type === 'boolean' && element.type === 'boolean') {
          renderedComponents.push(
            <BooleanCheckmark
              title={element.title}
              key={element.title}
              dbName={element.path}
              modifyData={modifyData}
              data={element.data}
              toggleData={element.visible}
            />
          );
        }
      }
    }
  }

  // Return the array of rendered components
  return renderedComponents.length > 0 ? renderedComponents : null;
}

export default ComponentTyper;
