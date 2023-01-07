/* eslint-disable react/prop-types */
import {
  Box,
  Card, CardContent, CardHeader, Grid, Skeleton,
} from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

function LoadingSkeleton() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{
      flexGrow: 1, ml: 2, mr: 2, mt: 3,
    }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 3 }}
        columns={{
          xs: 12, sm: 12, md: 12, lg: 12, xl: 12,
        }}
      >
        {React.Children.toArray(
          // eslint-disable-next-line no-unused-vars
          [...Array(10)].map((_movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card
                sx={{
                  maxWidth: 345, height: "92%", mb: 3, backgroundColor: colors.primary[500],
                }}
              >
                <CardHeader
                  action={(
                    <Skeleton height={10} animation="wave" width={30} />
                              )}
                  title={(
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="80%"
                      style={{ marginBottom: 6 }}
                    />
                              )}
                  subheader={(
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="20%"
                    />
                              )}
                />
                <Skeleton sx={{ height: 200 }} animation="wave" variant="rectangular" />
                <CardContent>
                  <Skeleton height={15} animation="wave" width="30%" />
                </CardContent>
              </Card>
            </Grid>
          )),
        )}
      </Grid>
    </Box>
  );
}

export default LoadingSkeleton;
