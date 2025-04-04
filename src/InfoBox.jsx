import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Box } from "@mui/material";
import React from "react";

export default function InfoBox({ info }) {
  let INIT_URL =
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";

  let HOT_URL =
    "https://plus.unsplash.com/premium_photo-1676320526001-07b75bd19ae3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VufGVufDB8fDB8fHww";
  let COLD_URL =
    "https://images.unsplash.com/photo-1477468572316-36979010099d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
  let RANI_URL =
    "https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.webp?a=1&b=1&s=612x612&w=0&k=20&c=jc45vpqNDgrvRZAn2foO82IhW9rUeXbQfxvLZaDW8H8=";

  return (
    <div className="InfoBox">
      <div className="CardContener">
        <Card
          sx={{
            maxWidth: 1000,
            display: "flex",
            maxHeight: 500,
            backgroundColor: "rgb(255, 252, 211)",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 400, height: 470 }}
            alt="green iguana"
            height="140"
            image={
              info.humidity > 80
                ? RANI_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <Box sx={{ display: "flex", maxWidth: 600 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ marginTop: 8 }}
              >
                {info.city}
              </Typography>
              <br />
              {info.humidity > 80 ? (
                <BeachAccessIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  textAlign: "center",
                  marginTop: 6,
                }}
                component={"div"}
              >
                <p>Temperature = {info.temp} &deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}</p>
                <p>Max Temp = {info.tempMax}</p>
                <p>
                  The weather can described as{" "}
                  <i>
                    <b>{info.weather} </b>
                  </i>
                  <br />
                  and feels like <b>{info.feelsLike}&deg;C</b>
                </p>
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </div>
    </div>
  );
}
