import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import ColorInput from "./colorInput";
import LineItemSample from "./lineItemSample";
import { useWindowSizer } from "../../../../../utils/windowSize";
import { useSelector, useDispatch } from "react-redux";
import { saveColorOptionsToMongo } from "../../../../../features/theme/themeSlice";

function ColorModeContainer({ mode }) {
  const dispatch = useDispatch();
  let { colorOptions } = useSelector((store) => store.theme);
  let { windowSize } = useWindowSizer();

  return (
    <Box
      sx={{
        backgroundColor: colorOptions[mode].background.default,
        minWidth: "50%",
      }}
    >
      <Box
        sx={{
          m: 1,
          pl: 2,
          pr: 2,
          pt: 1,
          pb: 2,
          minWidth: "45%",
          backgroundColor: colorOptions[mode].background.default,
          borderColor: colorOptions[mode].primary.main,
        }}
      >
        <Typography variant="h2" color={colorOptions[mode].primary.main}>
          {mode === "dark" ? "Dark" : "Light"} Mode Colors
        </Typography>
        <Divider sx={{ mb: 2, bgcolor: colorOptions[mode].primary.main }} />
        <Box
          display="flex"
          flexDirection={windowSize.width >= 1100 ? "row" : "column"}
          justifyContent="space-between"
        >
          <Box display="flex" flexDirection="column">
            <ColorInput
              title="Primary Color:"
              colors={colorOptions}
              path={[mode, "primary", "main"]}
            />
            <ColorInput
              title="Secondary Color:"
              colors={colorOptions}
              path={[mode, "secondary", "main"]}
            />
            <ColorInput
              title="Neutral Color:"
              colors={colorOptions}
              path={[mode, "neutral", "main"]}
            />
          </Box>
          <Box display="flex" flexDirection="column">
            <ColorInput
              title="Background Color:"
              colors={colorOptions}
              path={[mode, "background", "default"]}
            />
            <ColorInput
              title="Text Color:"
              colors={colorOptions}
              path={[mode, "text", "primary"]}
            />
            <Box
              sx={{
                pl: 0.5,
                pr: 0.5,
              }}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6" color={colorOptions[mode].text.primary}>
                Save {mode === "dark" ? "Dark" : "Light"} Mode Colors
              </Typography>
              <Button
                style={{
                  borderColor: colorOptions[mode].primary.main,
                  color: colorOptions[mode].primary.main,
                }}
                onClick={() => dispatch(saveColorOptionsToMongo())}
                variant="outlined"
                size="small"
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>

        <Divider
          sx={{ mt: 1, mb: 2, bgcolor: colorOptions[mode].primary.main }}
        />

        <LineItemSample
          name="Example 1"
          column1="Foo"
          column2="2017"
          boolean={true}
          mode={mode}
          temporaryColors={colorOptions}
        />
        <LineItemSample
          name="Example 2"
          column1="Bar"
          column2="1987"
          boolean={true}
          mode={mode}
          temporaryColors={colorOptions}
        />
        <LineItemSample
          name="Example 3"
          column1="Fee"
          column2="1996"
          boolean={true}
          mode={mode}
          temporaryColors={colorOptions}
        />
        <LineItemSample
          name="Example 4"
          column1="Fi"
          column2="1945"
          boolean={false}
          mode={mode}
          temporaryColors={colorOptions}
        />
        <LineItemSample
          name="Example 5"
          column1="Fo"
          column2="2003"
          boolean={true}
          mode={mode}
          temporaryColors={colorOptions}
        />
        <LineItemSample
          name="Example 6"
          column1="Fum"
          column2="1978"
          boolean={false}
          mode={mode}
          temporaryColors={colorOptions}
        />
        <LineItemSample
          name="Example 7"
          column1="Bum"
          column2="1956"
          boolean={false}
          mode={mode}
          temporaryColors={colorOptions}
        />
      </Box>
    </Box>
  );
}

export default ColorModeContainer;
