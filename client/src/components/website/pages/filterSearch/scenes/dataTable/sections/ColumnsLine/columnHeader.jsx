import { Box, Typography } from "@mui/material";
import HeightIcon from "@mui/icons-material/Height";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import { useWindowSizer } from "../../../../../../../../utils/windowSize";
import { useSelector, useDispatch } from "react-redux";
import {
  modifyControls,
  getTableData,
  addColumns,
  modifySingleFilter,
} from "../../../../../../../../features/search/filterSearch/filterSearchSlice";

const ColumnHeader = ({ item }) => {
  const dispatch = useDispatch();
  const { controls, columns } = useSelector((store) => store.filterSearch);

  let { windowSize } = useWindowSizer();
  let itemWidth = windowSize.width < 420 ? "100px" : "200px";

  const { title, path } = item;

  let { sort1, sort2 } = controls;

  function removeColumn() {
    //Handle if the item doesnt match either so we can just remove without attempting getTableData
    if (sort1.path !== path && sort2.path !== path) {
      dispatch(addColumns(columns.filter((x) => x.title !== title)));
      dispatch(
        modifySingleFilter({
          id: path,
          key: "isColumn",
          value: false,
        })
      );
      return;
    }
    //If Column has an active sort, handle removal of sort
    if (sort1.path === path) {
      //If column is sort 1
      if (sort2) {
        //If there is a second sort. Move it to 1.
        dispatch(modifyControls({ key: "sort1", value: sort2 }));
        dispatch(modifyControls({ key: "sort2", value: false }));
      } else {
        //If column is sort 2
        dispatch(modifyControls({ key: "sort1", value: false }));
      }
    } else if (sort2.path === path) {
      //If we are deleting second sort
      dispatch(modifyControls({ key: "sort2", value: false }));
    }
    dispatch(addColumns(columns.filter((x) => x.title !== title)));
    dispatch(
      modifySingleFilter({
        id: path,
        key: "isColumn",
        value: false,
      })
    );
    dispatch(modifyControls({ key: "page", value: 0 }));
    dispatch(getTableData());
  }

  function handleChange() {
    if (sort1 === false) {
      dispatch(
        modifyControls({
          key: "sort1",
          value: { name: title, path: path, val: -1 },
        })
      );
    } else if (sort1.name === title && sort1.val === -1) {
      dispatch(
        modifyControls({
          key: "sort1",
          value: { name: title, path: path, val: 1 },
        })
      );
    } else if (sort1.name === title && sort1.val === 1) {
      if (sort2 === false) {
        dispatch(modifyControls({ key: "sort1", value: false }));
      } else {
        dispatch(modifyControls({ key: "sort1", value: sort2 }));
        dispatch(modifyControls({ key: "sort2", value: false }));
      }
    } else if (sort2 === false) {
      dispatch(
        modifyControls({
          key: "sort2",
          value: { name: title, path: path, val: -1 },
        })
      );
    } else if (sort2.name === title && sort2.val === -1) {
      dispatch(
        modifyControls({
          key: "sort2",
          value: { name: title, path: path, val: 1 },
        })
      );
    } else if (sort2.name === title && sort2.val === 1) {
      dispatch(modifyControls({ key: "sort2", value: false }));
    }
    dispatch(modifyControls({ key: "page", value: 0 }));
    dispatch(getTableData());
  }

  const isSort1 = sort1 && sort1.name === title;
  const isSort2 = sort2 && sort2.name === title;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        minWidth: itemWidth,
        maxWidth: itemWidth,
        minHeight: 20,
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "secondary.main",
          borderRadius: 5,
        }}
      >
        <IconButton onClick={removeColumn} size="small">
          <ClearIcon color="primary.main" />
        </IconButton>

        <Typography noWrap variant="h6" color="white">
          {title}
        </Typography>

        {isSort1 && sort1.val === -1 && (
          <IconButton onClick={handleChange} size="small">
            <SouthIcon color="primary.main" />
          </IconButton>
        )}

        {isSort1 && sort1.val === 1 && (
          <IconButton onClick={handleChange} size="small">
            <NorthIcon color="primary.main" />
          </IconButton>
        )}

        {(!isSort1 || sort1.val === 0) && !isSort2 && (
          <IconButton onClick={handleChange} size="small">
            <HeightIcon />
          </IconButton>
        )}

        {isSort2 && sort2.val === -1 && (
          <IconButton onClick={handleChange} size="small">
            <SouthIcon color="primary.main" />
          </IconButton>
        )}

        {isSort2 && sort2.val === 1 && (
          <IconButton onClick={handleChange} size="small">
            <NorthIcon color="primary.main" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default ColumnHeader;
