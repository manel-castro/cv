import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import { useTranslation } from "react-i18next";

function Timeline() {
  const { t } = useTranslation();

  return (
    <div id="history">
      <div className="items-container">
        <h1>{t("career-history")}</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date={t("career-history-1-date")}
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("career-history-1-title")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("career-history-1-company")}
            </h4>
            <p>{t("career-history-1-description")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t("career-history-2-date")}
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("career-history-2-title")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("career-history-2-company")}
            </h4>
            <p>{t("career-history-2-description")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t("career-history-3-date")}
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("career-history-3-title")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("career-history-3-company")}
            </h4>
            <p>{t("career-history-3-description")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t("career-history-4-date")}
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("career-history-4-title")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("career-history-4-company")}
            </h4>
            <p>{t("career-history-4-description")}</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
