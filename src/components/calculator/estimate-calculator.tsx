"use client";

import { useId, useState } from "react";
import styles from "@/app/calculator/page.module.css";

function money(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export function EstimateCalculator() {
  const idPrefix = useId();
  const [quotesPerMonth, setQuotesPerMonth] = useState(40);
  const [jobValue, setJobValue] = useState(6000);
  const [neverCloses, setNeverCloses] = useState(70);

  const openEstimates = quotesPerMonth * 3 * (neverCloses / 100);
  const pipeline = openEstimates * jobValue;
  const recoverJobs = openEstimates * 0.1;
  const recoverValue = recoverJobs * jobValue;

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <div className={styles.h}>Your Numbers</div>

        <div className={styles.field}>
          <label htmlFor={`${idPrefix}-est`} className={styles.fieldLabel}>
            Quotes You Send Per Month: <span className={styles.val}>{quotesPerMonth}</span>
          </label>
          <input
            id={`${idPrefix}-est`}
            className={styles.rangeInput}
            type="range"
            min={5}
            max={300}
            step={5}
            value={quotesPerMonth}
            onChange={(e) => setQuotesPerMonth(Number(e.target.value))}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={`${idPrefix}-ticket`} className={styles.fieldLabel}>
            Average Job Value: <span className={styles.val}>{money(jobValue)}</span>
          </label>
          <input
            id={`${idPrefix}-ticket`}
            className={styles.rangeInput}
            type="range"
            min={500}
            max={20000}
            step={500}
            value={jobValue}
            onChange={(e) => setJobValue(Number(e.target.value))}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={`${idPrefix}-close`} className={styles.fieldLabel}>
            Roughly What Share Never Closes? <span className={styles.val}>{neverCloses}%</span>
          </label>
          <input
            id={`${idPrefix}-close`}
            className={styles.rangeInput}
            type="range"
            min={30}
            max={90}
            step={5}
            value={neverCloses}
            onChange={(e) => setNeverCloses(Number(e.target.value))}
          />
        </div>
      </div>

      <div className={styles.result}>
        <div className={styles.lab}>Value Sitting In Your Pipeline (Last 90 Days)</div>
        <div className={styles.mid}>
          <div className={styles.big}>{money(pipeline)}</div>
        </div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <span>If You Recovered Just 1 In 10</span>
            <b>{money(recoverValue)}</b>
          </div>
          <div className={styles.row}>
            <span>Extra Jobs Booked</span>
            <b>{Math.round(recoverJobs)}</b>
          </div>
        </div>
        <a className={styles.cta} href="/homeservices">
          Get The Real Number, Free Audit
        </a>
      </div>
    </div>
  );
}
