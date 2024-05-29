import { useMemo } from "react";
import { useMediaQueries, useMediaQuery } from "@inube/design-system";

import { SkeletonLine } from "@inube/design-system";
import {
  IAction,
  IBreakpoint,
  IEntry,
  ITitle,
  TextAppearanceType,
} from "./types";
import {
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledThAction,
  StyledThTitle,
  StyledThead,
  StyledTr,
} from "./styles";
import { ITextAppearance, Text } from "@inubekit/text";
import { DisplayEntry } from "./DisplayEntry";

function findCurrentMediaQuery(currentMediaQuery: Record<string, boolean>) {
  const lastIndexMedia = Object.values(currentMediaQuery).lastIndexOf(true);
  return lastIndexMedia !== -1 ? lastIndexMedia : 0;
}

function priorityColumns(titles: ITitle[], numColumns: number) {
  const maxPriorityToDisplay = numColumns - 1;
  return titles.filter((title) => title.priority <= maxPriorityToDisplay);
}

function totalTitleColumns(
  titles: ITitle[],
  breakpoints?: IBreakpoint[],
  media?: Record<string, boolean>,
) {
  const numColumns = breakpoints
    ? breakpoints[findCurrentMediaQuery(media ? media : {})].totalColumns
    : titles.length;

  if (numColumns >= titles.length) return titles;

  return priorityColumns(titles, numColumns);
}

const renderActionTitle = (actionName: string, key?: React.Key) =>
  actionName ? (
    <StyledThAction key={key}>
      <Text type="label" size="medium" textAlign="center" appearance="dark">
        {actionName}
      </Text>
    </StyledThAction>
  ) : null;

function renderActionsTitles(
  actions: IAction[],
  mediaQuery: boolean,
  mobileResumeTitle?: string,
  hideMobileResume?: boolean,
) {
  const actionsList =
    hideMobileResume && mediaQuery
      ? actions.filter((title) => title.mobilePriority)
      : actions;

  return mediaQuery && !hideMobileResume
    ? renderActionTitle(mobileResumeTitle ? mobileResumeTitle : "Abrir")
    : actionsList.map((action) =>
        renderActionTitle(action.actionName, `action-${action.id}`),
      );
}

function renderActions(
  actions: IAction[],
  entry: IEntry,
  mediaQuery: boolean,
  portalId?: string,
  hideMobileResume?: boolean,
) {
  const actionsList =
    hideMobileResume && mediaQuery
      ? actions.filter((action) => action.mobilePriority)
      : actions;

  return mediaQuery && portalId && !hideMobileResume ? (
    <StyledTd>
      <DisplayEntry />
    </StyledTd>
  ) : (
    actionsList.map((action) => (
      <StyledTd key={`${entry.id}-${action.id}`}>
        {action.content(entry)}
      </StyledTd>
    ))
  );
}

const actionsLoading = (numberActions: number) => {
  const cellsOfActionsLoading = [];
  for (let cellAction = 0; cellAction < numberActions; cellAction++) {
    cellsOfActionsLoading.push(
      <StyledTd key={cellAction}>
        <SkeletonLine animated />
      </StyledTd>,
    );
  }
  return cellsOfActionsLoading;
};

const dataLoading = (titleColumns: ITitle[], numberActions: number) => {
  const rowsLoading = [];
  for (let rows = 0; rows < 4; rows++) {
    rowsLoading.push(
      <StyledTr key={rows}>
        {titleColumns.map((title) => (
          <StyledTd key={`e-${title.id}`}>
            <SkeletonLine animated />
          </StyledTd>
        ))}
        {actionsLoading(numberActions)}
      </StyledTr>,
    );
  }
  return rowsLoading;
};

interface TableUIProps {
  portalId?: string;
  titles: ITitle[];
  actions?: IAction[];
  entries: IEntry[];
  loading?: boolean;
  breakpoints?: IBreakpoint[];
  modalTitle?: string;
  infoTitle?: string;
  actionsTitle?: string;
  hideMobileResume?: boolean;
  mobileResumeTitle?: string;
  colsSameWidth?: boolean;
  withactions: boolean;
  customAppearance?: (titleId: string, entry: IEntry) => TextAppearanceType;
}

const TableUI = (props: TableUIProps) => {
  const {
    portalId,
    titles,
    actions,
    entries,
    loading,
    breakpoints,
    hideMobileResume,
    mobileResumeTitle,
    colsSameWidth,
    withactions,
    customAppearance,
  } = props;

  const isTablet = useMediaQuery("(max-width: 850px)");

  const queriesArray = useMemo(
    () => breakpoints && breakpoints.map((breakpoint) => breakpoint.breakpoint),
    [breakpoints],
  );

  const media = useMediaQueries(queriesArray || []);

  const titleColumns = useMemo(
    () => totalTitleColumns(titles, breakpoints, media),
    [titles, breakpoints, media],
  );

  const numberActions = actions ? actions.length : 0;

  return (
    <StyledTable colsSameWidth={colsSameWidth}>
      <StyledThead>
        <StyledTr>
          {titleColumns.map(
            (title) =>
              title.titleName && (
                <StyledThTitle
                  key={`title-${title.id}`}
                  aria-label={title.titleName}
                  $countcolumns={titleColumns.length}
                  colsSameWidth={colsSameWidth}
                  $withactions={withactions.toString()}
                >
                  <Text type="label" size="medium" appearance="dark">
                    {title.titleName}
                  </Text>
                </StyledThTitle>
              ),
          )}
          {actions &&
            renderActionsTitles(
              actions,
              isTablet,
              mobileResumeTitle,
              hideMobileResume,
            )}
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        {loading ? (
          dataLoading(titleColumns, numberActions)
        ) : (
          <>
            {entries.length > 0 ? (
              entries.map((entry, index) => (
                <StyledTr
                  key={`entry-${entry.id}`}
                  aria-labelledby={`entry-${entry.id}`}
                  $islasttr={(index === entries.length - 1).toString()}
                >
                  {titleColumns.map(
                    (title) =>
                      entry[title.id] && (
                        <StyledTd
                          key={`e-${title.id}`}
                          $withactions={withactions.toString()}
                        >
                          <Text
                            type="body"
                            size="small"
                            appearance={
                              customAppearance
                                ? (customAppearance(
                                    title.id,
                                    entry,
                                  ) as ITextAppearance)
                                : "dark"
                            }
                            ellipsis
                          >
                            {entry[title.id]}
                          </Text>
                        </StyledTd>
                      ),
                  )}
                  {actions && renderActions(actions, entry, isTablet, portalId)}
                </StyledTr>
              ))
            ) : (
              <StyledTr aria-labelledby={`no-data`} $islasttr={true.toString()}>
                <StyledTd colSpan={titleColumns.length + 1}>
                  <Text type="body" size="small" appearance="dark" ellipsis>
                    No se encontró información
                  </Text>
                </StyledTd>
              </StyledTr>
            )}
          </>
        )}
      </StyledTbody>
    </StyledTable>
  );
};

export { TableUI };
export type { TableUIProps };
