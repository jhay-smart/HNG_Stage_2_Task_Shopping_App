import React from "react";
import { PiStarThin } from "react-icons/pi";
import Hotdeals1 from "../Assets/hotdeals1.jpg";
import Hotdeals3 from "../Assets/hotdeals3.jpg";
import Hotdeals4 from "../Assets/hotdeals4.jpg";
import Hotdeals5 from '../Assets/hotdeals5.jpg'
import Collection1 from "../Assets/collection1.jpg";
import Collection2 from "../Assets/collection3.jpg";
import Collection4 from "../Assets/collection4.jpg";
import Collection5 from "../Assets/collection5.jpg";
import Collection7 from '../Assets/collection7.jpg';


export default function Collections() {
  return (
    <div
      style={{ marginTop: "300px", display: "flex", flexDirection: "column" , backgroundColor: '#f9f9f9'}}
    >
      <div>
        <span
          style={{
            marginLeft: "30px",
            fontSize: "24px",
            fontFamily: "inter",
            fontWeight: "bold",
          }}
        >
          {" "}
          Shop from Our Collection{" "}
        </span>
      </div>
      <div
        style={{
          height: 309,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          margin: "30px",
          padding: "19px 22px",
          borderRadius: 20,
          boxShadow: "0 1px 23.1px -7px rgba(0, 0, 0, 0.25)",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}
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
              src={Collection1}
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
          style={{ backgroundColor: "#f9f9f9", }}
          className="w-[150px] h-[201.4px] flex flex-grow-0 flex-col justify-start items-start gap-15px p-8px pl-10px rounded-25px bg-[#ffffff]"
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
          style={{ borderRadius: "20px" , backgroundColor: "#f9f9f9",}}
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
              src={Collection2}
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
          style={{ borderRadius: "20px" , backgroundColor: "#f9f9f9",}}
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
              src={Collection4}
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
          style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}
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
              src={Collection5}
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
          style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}
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
        <div
          style={{ borderRadius: "20px", backgroundColor: "#f9f9f9",}}
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
          style={{ borderRadius: "20px", backgroundColor: "#f9f9f9",}}
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
          style={{ borderRadius: "20px", backgroundColor: "#f9f9f9",}}
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
              src={Collection7}
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
