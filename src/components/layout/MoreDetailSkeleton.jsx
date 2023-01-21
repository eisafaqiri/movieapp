import {
  Box,
  Container, Divider, Grid, Paper, Skeleton, Stack,
} from "@mui/material";
import React from "react";

function MoreDetailSkeleton() {
  return (
    <Container sx={{ mt: 12 }}>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          flexGrow: 1,
          backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#101224" : "#fffefe"),
        }}
      >

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Skeleton variant="rectangular" width="100%">
              <div style={{ paddingTop: "120%" }} />
            </Skeleton>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs>
              <Grid item xs>
                <Skeleton animation="wave" height={20} style={{ marginBottom: 6, width: "40%" }} />
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6, width: "10%" }} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} container sx={{ alignItems: "end" }}>
                <Box sx={{ display: "flex", alignItems: "end" }}>
                  <Grid
                    component="div"
                    container
                    sx={{
                      height: 130,
                      width: 83,
                      borderRadius: 1,
                    }}
                  >
                    <Skeleton animation="wave" height="100%" width="100%" />
                  </Grid>
                  <Grid
                    component="div"
                    sx={{
                      height: 60,
                      width: 83,
                      m: 1,
                    }}
                  >
                    <Skeleton animation="wave" height="90%" width="100%" />
                  </Grid>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Grid
                  component="div"
                  sx={{
                    height: 60,
                    width: {
                      xs: 72,
                      sm: 130,
                    },
                    ml: 0.5,

                  }}
                >
                  <Skeleton animation="wave" height="70%" width="100%" />
                </Grid>
              </Grid>
              <Grid item container>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Skeleton animation="wave" height="50px" width="100px" sx={{ borderRadius: 4 }} />
                  <Skeleton animation="wave" height="50px" width="100px" sx={{ borderRadius: 4 }} />
                </Stack>
              </Grid>
              <Grid mt={1}>
                {React.Children.toArray(
                  // eslint-disable-next-line no-unused-vars
                  [...Array(8)].map((_item) => (
                    <Skeleton animation="wave" height={14} width="80%" style={{ marginBottom: 6 }} />
                  )),
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default MoreDetailSkeleton;
