import React from "react";
import { HiFire } from "react-icons/hi";
import { PiStarThin } from "react-icons/pi";
import Hotdeals1 from "../Assets/hotdeals1.jpg";
import Hotdeals2 from "../Assets/hotdeals2.jpg";
import Hotdeals3 from "../Assets/hotdeals3.jpg";
import Hotdeals4 from "../Assets/hotdeals4.jpg";
import Hotdeals5 from "../Assets/hotdeals5.jpg";

export default function HotDeals() {
  return (
    <div
      className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        backgroundColor: "#fff",
        borderColor: "#333",
        borderWidth: "2px",
        borderStyle: "solid",
        padding: "20px",
        width: "70%",
        height: "300px",
        marginTop: "90px",
      }}
    >
      <div className="flex flex-row w-[230px] h-[55px] justify-center items-center gap-10px mxr-[538px] mbb-[17px] p-10px">
        <span
          style={{
            width: "138px",
            height: "29px",
            flexGrow: 0,
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: 800,
            fontStretch: "normal",
            fontStyle: "italic",
            lineHeight: "normal",
            letterSpacing: "normal",
            textAlign: "left",
            color: "#000",
          }}
        >
          HOT DEALS
        </span>
        <div className="flex flex-row">
          <HiFire
            className="stroke-red text-red"
            style={{ color: "red", width: "14px", height: "18px" }}
          />
          <HiFire style={{ color: "red", width: "14px", height: "18px" }} />
          <HiFire style={{ color: "red", width: "14px", height: "18px" }} />
        </div>
      </div>
      <div className="flex flex-row gap-10 justify-center">
        <div
          style={{ borderRadius: "20px" }}
          className="w-[150px] h-[201.4px] flex flex-grow-0 flex-col justify-start items-start gap-15px p-8px pl-10px rounded-25px bg-[#f1f1f1]"
        >
          <div
            style={{
              gap: "8px",
              marginTop: "8px",
              marginRight: "8px",
              marginLeft: "20px",
            }}
          >
            <img
              src={Hotdeals1}
              alt=""
              style={{
                width: "100px",
                height: "98px",
                borderRadius: "20px",
                backgroundColor: "#d9d9d9",
              }}
            />
          </div>

          <span
            style={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "normal",
              letterSpacing: "normal",
              color: "#000",
              marginTop: "12px",
              marginLeft: "10px",
            }}
          >
            2024 Mizuno Creation Wave
          </span>
          <span
            class="N72000"
            style={{
              height: "17px",
              flexGrow: 0,
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "bold",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "normal",
              letterSpacing: "normal",
              color: "#000",
              marginTop: "5px",
              marginLeft: "10px",
            }}
          >
            N72,000
          </span>
          <div className="flex flex-row ml-2">
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
              }}
            />
          </div>
        </div>
        <div
          style={{ borderRadius: "20px" }}
          className="w-[150px] h-[201.4px] flex flex-grow-0 flex-col justify-start items-start gap-15px p-8px pl-10px rounded-25px bg-[#f1f1f1]"
        >
          <div
            style={{
              gap: "8px",
              marginTop: "8px",
              marginRight: "8px",
              marginLeft: "20px",
            }}
          >
            <img
              src={Hotdeals2}
              alt=""
              style={{
                width: "100px",
                height: "98px",
                borderRadius: "20px",
                backgroundColor: "#d9d9d9",
              }}
            />
          </div>

          <span
            style={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "normal",
              letterSpacing: "normal",
              color: "#000",
              marginTop: "12px",
              marginLeft: "10px",
            }}
          >
            2024 Mizuno Creation Wave
          </span>
          <span
            class="N72000"
            style={{
              height: "17px",
              flexGrow: 0,
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "bold",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "normal",
              letterSpacing: "normal",
              color: "#000",
              marginTop: "5px",
              marginLeft: "10px",
            }}
          >
            N72,000
          </span>
          <div className="flex flex-row ml-2">
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
              }}
            />
          </div>
        </div>
        <div
          style={{ borderRadius: "20px" }}
          className="w-[150px] h-[201.4px] flex flex-grow-0 flex-col justify-start items-start gap-15px p-8px pl-10px rounded-25px bg-[#f1f1f1]"
        >
          <div
            style={{
              gap: "8px",
              marginTop: "8px",
              marginRight: "8px",
              marginLeft: "20px",
            }}
          >
            <img
              src={Hotdeals3}
              alt=""
              style={{
                width: "100px",
                height: "98px",
                borderRadius: "20px",
                backgroundColor: "#d9d9d9",
              }}
            />
          </div>

          <span
            style={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "normal",
              letterSpacing: "normal",
              color: "#000",
              marginTop: "12px",
              marginLeft: "10px",
            }}
          >
            2024 Mizuno Creation Wave
          </span>
          <span
            class="N72000"
            style={{
              height: "17px",
              flexGrow: 0,
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "bold",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "normal",
              letterSpacing: "normal",
              color: "#000",
              marginTop: "5px",
              marginLeft: "10px",
            }}
          >
            N72,000
          </span>
          <div className="flex flex-row ml-2">
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
              }}
            />
          </div>
        </div>
        <div
          style={{ borderRadius: "20px" }}
          className="w-[150px] h-[201.4px] flex flex-grow-0 flex-col justify-start items-start gap-15px p-8px pl-10px rounded-25px bg-[#f1f1f1]"
        >
          <div
            style={{
              gap: "8px",
              marginTop: "8px",
              marginRight: "8px",
              marginLeft: "20px",
            }}
          >
            <img
              src={Hotdeals4}
              alt=""
              style={{
                width: "100px",
                height: "98px",
                borderRadius: "20px",
                backgroundColor: "#d9d9d9",
              }}
            />
          </div>

          <span
            style={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "normal",
              letterSpacing: "normal",
              color: "#000",
              marginTop: "12px",
              marginLeft: "10px",
            }}
          >
            2024 Mizuno Creation Wave
          </span>
          <span
            class="N72000"
            style={{
              height: "17px",
              flexGrow: 0,
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "bold",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "normal",
              letterSpacing: "normal",
              color: "#000",
              marginTop: "5px",
              marginLeft: "10px",
            }}
          >
            N72,000
          </span>
          <div className="flex flex-row ml-2">
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
              }}
            />
          </div>
        </div>
        <div
          style={{ borderRadius: "20px" }}
          className="w-[150px] h-[201.4px] flex flex-grow-0 flex-col justify-start items-start gap-15px p-8px pl-10px rounded-25px bg-[#f1f1f1]"
        >
          <div
            style={{
              gap: "8px",
              marginTop: "8px",
              marginRight: "8px",
              marginLeft: "20px",
            }}
          >
            <img
              src={Hotdeals5}
              alt=""
              style={{
                width: "100px",
                height: "98px",
                borderRadius: "20px",
                backgroundColor: "#d9d9d9",
              }}
            />
          </div>

          <span
            style={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "normal",
              letterSpacing: "normal",
              color: "#000",
              marginTop: "12px",
              marginLeft: "10px",
            }}
          >
            2024 Mizuno Creation Wave
          </span>
          <span
            class="N72000"
            style={{
              height: "17px",
              flexGrow: 0,
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "bold",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "normal",
              letterSpacing: "normal",
              color: "#000",
              marginTop: "5px",
              marginLeft: "10px",
            }}
          >
            N72,000
          </span>
          <div className="flex flex-row ml-2">
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
                color: "black",
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
              }}
            />
            <PiStarThin
              style={{
                width: "20px",
                height: "20px",
                flexGrow: 0,
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
