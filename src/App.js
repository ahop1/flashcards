import flashcardSettings from './flashcardSettings.json';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Tooltip from '@material-ui/core/Tooltip';
import LoopIcon from '@material-ui/icons/Loop';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import SearchIcon from '@material-ui/icons/Search';
import DoneIcon from '@material-ui/icons/Done';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import HelpIcon from '@material-ui/icons/Help';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PublishIcon from '@material-ui/icons/Publish';
import GetAppIcon from '@material-ui/icons/GetApp';
import SaveIcon from '@material-ui/icons/Save';
import RefreshIcon from '@material-ui/icons/Refresh';
import LaunchIcon from '@material-ui/icons/Launch';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import LinearProgress from '@material-ui/core/LinearProgress';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    padding: "0px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    backgroundColor: "rgba(20, 20, 20, 0.8)"
  },
  paper: {
    width: "min(600px, 80%)",
  },
  chippaper: {
    display: "flex",
    flexWrap: "wrap",
    height: 70,
    overflow: "auto",
  },
  cardValuePaper: {
    display: "flex",
    flexWrap: "wrap",
    height: 170,
    overflow: "auto",
  },
  cardTagPaper: {
    display: "flex",
    overflow: "auto",
    height: 45,
    padding: "10px",
  },
  formControl: {
    width: "100%",
    minWidth: "100%",
    maxWidth: "100%",
  },
}));

function Flashcard(props) {

  return (
    <Card align="center" raised style={{ padding: "10px", height: "100%" }}>
      <CardActionArea onClick={props.handleShowFront} style={{ height: "calc(100% - 50px)" }}>
        <Typography
          variant="h1"
          color="textPrimary"
          style={props.showFront ? (props.frontValue.length >= 11 ? {
            fontSize: '2rem',
            fontWeight: 400,
            '@media (min-width:600px)': {
              fontSize: '3rem',
            },
            [props.theme.breakpoints.up('md')]: {
              fontSize: '4rem',
            },
          } : {}) : (props.backValue.length >= 11 ? {
            fontSize: '2rem',
            fontWeight: 400,
            '@media (min-width:600px)': {
              fontSize: '3rem',
            },
            [props.theme.breakpoints.up('md')]: {
              fontSize: '4rem',
            },
          } : {})}>
          {props.showFront ? props.frontValue : props.backValue}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          showing: {props.showFront ? props.frontCard : props.backCard}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          other side: {props.showFront ? props.backCard : props.frontCard}
        </Typography>
        <Typography variant="body2" color="secondary">
          {props.showFront ? props.cardSetName : ""}
        </Typography>
      </CardActionArea>
      <CardActions>
        <Grid item xs={3}>
          <Tooltip title="Previous card">
            <IconButton onClick={() => props.handleProgressChange(-1)}>
              <NavigateBeforeIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={3}>
          <Tooltip title={props.correct === false ? "Undo mark as incorrect" : "Mark as incorrect and move to next card"} >
            <IconButton onClick={() => props.handleCorrectChange(props.correct === false ? null : false)}>
              <CancelIcon color={props.correct === false ? "primary" : "disabled"} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={3}>
          <Tooltip title={props.correct ? "Undo mark as correct" : "Mark as correct and move to next card"} >
            <IconButton onClick={() => props.handleCorrectChange(props.correct ? null : true)}>
              <CheckCircleIcon color={props.correct ? "primary" : "disabled"} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={3}>
          <Tooltip title="Next card">
            <IconButton onClick={() => props.handleProgressChange(1)}>
              <NavigateNextIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </CardActions>
    </Card >
  )
};

function CardSetPaper(props) {
  const classes = useStyles();

  return (
    <Paper variant="outlined" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
      <Container>
        <Grid container item xs={12} spacing={1} alignItems="center">
          <Grid item xs={12}>
            <TextField
              size="small"
              id="card-set-name"
              label="Card set name"
              autoComplete="off"
              helperText={props.cardSetNameError ? "Cannot be blank" : "What do you want to call your card set?"}
              fullWidth
              value={props.cardSetName}
              onChange={props.handleCardSetNameChange}
              error={props.cardSetNameError}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              size="small"
              id="front-card"
              label="Front of card"
              autoComplete="off"
              helperText={props.frontCardError ? "Cannot be blank" : "e.g. English"}
              fullWidth
              value={props.frontCard}
              onChange={props.handleFrontCardChange}
              error={props.frontCardError}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              size="small"
              id="back-card"
              label="Back of card"
              autoComplete="off"
              helperText={props.backCardError ? "Cannot be blank" : "e.g. Sinhala"}
              fullWidth
              value={props.backCard}
              onChange={props.handleBackCardChange}
              error={props.backCardError}
            />
          </Grid>
          <Grid container item xs={12} sm={4} alignItems="center" spacing={1}>
            <Grid item xs={5} sm={12}>
              <TextField
                size="small"
                id="front-value"
                label="Front value"
                autoComplete="off"
                helperText={props.frontValueError ? "Cannot be blank" : "e.g. Book"}
                fullWidth
                value={props.frontValue}
                onChange={props.handleFrontValueChange}
                error={props.frontValueError}
              />
            </Grid>
            <Grid item xs={5} sm={12}>
              <TextField
                size="small"
                id="back-value"
                label="Back value"
                autoComplete="off"
                helperText={props.backValueError ? "Cannot be blank" : "e.g. පොත"}
                fullWidth
                value={props.backValue}
                onChange={props.handleBackValueChange}
                error={props.backValueError}
              />
            </Grid>
            <Grid container item xs={2} sm={12} >
              <Grid item xs={12} sm={6}>
                <Tooltip title="Add card">
                  <IconButton onClick={props.handleAddCard}>
                    <AddCircleIcon color="primary" />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Tooltip title="Replace selected card">
                  <IconButton onClick={props.handleReplaceCard}>
                    <FindReplaceIcon color={props.selectedCardValue !== -1 ? "primary" : "disabled"} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.cardValuePaper} variant="outlined">
              {props.cardValues.map((card, num) => {
                return (
                  <Tooltip
                    key={num}
                    title="Select card and use the replace button to update its value"
                    enterDelay={1000}
                    placement="top"
                  >
                    <Chip
                      key={num}
                      size="small"
                      label={card.frontValue + " ↔ " + card.backValue}
                      onClick={() => props.handleCardValueClick(num)}
                      onDelete={() => props.handleDeleteCardValue(num)}
                      deleteIcon={<Tooltip title="Delete this card"><CancelIcon /></Tooltip>}
                      color={num === props.selectedCardValue ? "primary" : "default"}
                    />
                  </Tooltip>
                )
              })}
            </Paper>
          </Grid>
          <Grid item xs={10} sm={4}>
            <TextField
              size="small"
              id="tag"
              label="Add some tags"
              autoComplete="off"
              helperText={props.tagError ? "Cannot be blank" : "e.g. language / geography"}
              fullWidth
              value={props.tag}
              onChange={props.handleTagChange}
              error={props.tagError}
            />
          </Grid>
          <Grid item xs={2} sm={1}>
            <Tooltip title="Add tag">
              <IconButton onClick={props.handleAddTag}>
                <AddCircleIcon color="secondary" />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Paper className={classes.cardTagPaper} variant="outlined">
              {props.tagValues.map((tagLabel, num) => {
                return (
                  <Chip
                    key={tagLabel}
                    size="small"
                    label={tagLabel}
                    onDelete={() => props.handleDeleteTag(num)}
                    color="secondary"
                  />
                )
              })}
            </Paper>
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end" style={{ padding: "5px" }}>
            <Button variant="contained" color="primary" onClick={props.handleSubmitCardSet} startIcon={<PublishIcon />}>
              {props.cardSetSelected === "new" ? "Submit" : "Update"} card set
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
};

function CardSetsDrawer(props) {
  const classes = useStyles();
  const [cardSetSelected, setCardSetSelected] = React.useState("new");

  const [cardSetName, setCardSetName] = React.useState("");
  const [cardSetNameError, setCardSetNameError] = React.useState(false);
  const [frontCard, setFrontCard] = React.useState("");
  const [frontCardError, setFrontCardError] = React.useState(false);
  const [backCard, setBackCard] = React.useState("");
  const [backCardError, setBackCardError] = React.useState(false);
  const [frontValue, setFrontValue] = React.useState("");
  const [frontValueError, setFrontValueError] = React.useState(false);
  const [backValue, setBackValue] = React.useState("");
  const [backValueError, setBackValueError] = React.useState(false);
  const [cardValues, setCardValues] = React.useState([]);
  const [selectedCardValue, setSelectedCardValue] = React.useState(-1);
  const [tag, setTag] = React.useState("");
  const [tagError, setTagError] = React.useState(false);
  const [tagValues, setTagValues] = React.useState([]);
  const [settingsText, setSettingsText] = useState("");
  const [localDialogOpen, setLocalDialogOpen] = useState(false);

  const handleCardSetChange = (event) => {
    setCardSetSelected(event.target.value);
    updatePaperValues(event.target.value);
  };

  const updatePaperValues = (cs) => {
    setCardSetName(cs === "new" ? "" : props.fullCardSets[cs].cardSetName);
    setFrontCard(cs === "new" ? "" : props.fullCardSets[cs].frontCard);
    setBackCard(cs === "new" ? "" : props.fullCardSets[cs].backCard);
    setFrontValue("");
    setBackValue("");
    setCardValues(cs === "new" ? [] : props.fullCardSets[cs].cardValues);
    setTag("");
    setTagValues(cs === "new" ? [] : props.fullCardSets[cs].tagValues);
    setCardSetNameError(false);
    setFrontCardError(false);
    setBackCardError(false);
    setFrontValueError(false);
    setBackValueError(false);
    setTagError(false);
  };

  const handleCardSetNameChange = (event) => {
    setCardSetName(event.target.value);
    setCardSetNameError(false);
  };

  const handleFrontCardChange = (event) => {
    setFrontCard(event.target.value);
    setFrontCardError(false);
  };

  const handleBackCardChange = (event) => {
    setBackCard(event.target.value);
    setBackCardError(false);
  };

  const handleFrontValueChange = (event) => {
    setFrontValue(event.target.value);
    setFrontValueError(false);
  };

  const handleBackValueChange = (event) => {
    setBackValue(event.target.value);
    setBackValueError(false);
  };

  const handleTagChange = (event) => {
    setTag(event.target.value);
    setTagError(false);
  };

  const handleAddCard = () => {
    if (frontValue === "" || backValue === "") {
      setFrontValueError(frontValue === "");
      setBackValueError(backValue === "");
      return;
    };
    const newCardValues = cardValues.slice();
    newCardValues.push({ frontValue: frontValue, backValue: backValue });
    setCardValues(newCardValues);
    setFrontValue("");
    setBackValue("");
  };

  const handleCardValueClick = (num) => {
    if (selectedCardValue === num) {
      setSelectedCardValue(-1);
      return;
    };
    setSelectedCardValue(num);
    setFrontValue(cardValues[num].frontValue);
    setBackValue(cardValues[num].backValue);
  };

  const handleDeleteCardValue = (num) => {
    const newCardValues = cardValues.slice();
    newCardValues.splice(num, 1);
    setCardValues(newCardValues);
    setSelectedCardValue(selectedCardValue > num ? selectedCardValue - 1 : (selectedCardValue === num ? -1 : selectedCardValue));
  };

  const handleReplaceCard = () => {
    if (selectedCardValue === -1) {
      return;
    };
    if (frontValue === "" || backValue === "") {
      setFrontValueError(frontValue === "");
      setBackValueError(backValue === "");
      return;
    };
    const newCardValues = cardValues.slice();
    newCardValues.splice(selectedCardValue, 1, { frontValue: frontValue, backValue: backValue });
    setCardValues(newCardValues);
    setFrontValue("");
    setBackValue("");
  };

  const handleAddTag = () => {
    if (tagValues.includes(tag) || tag === "") {
      setTagError(tag === "");
      return;
    };
    const newTagValues = tagValues.slice();
    newTagValues.push(tag);
    setTagValues(newTagValues);
    setTag("");
  };

  const handleDeleteTag = (num) => {
    const newTagValues = tagValues.slice();
    newTagValues.splice(num, 1);
    setTagValues(newTagValues);
  };

  const handleSubmitCardSet = () => {
    if (cardSetName === "" || frontCard === "" || backCard === "" || cardValues.length === 0) {
      setCardSetNameError(cardSetName === "");
      setFrontCardError(frontCard === "");
      setBackCardError(backCard === "");
      setFrontValueError(cardValues.length === 0);
      setBackValueError(cardValues.length === 0);
      return;
    };
    const newCardSet = {
      cardSetName: cardSetName,
      frontCard: frontCard,
      backCard: backCard,
      cardValues: cardValues,
      tagValues: tagValues
    };
    props.handleSubmitCardSet(newCardSet, cardSetSelected);
    props.handleSuccessAlert(cardSetSelected === "new" ? "new" : "updated");
    setCardSetSelected("new");
    updatePaperValues("new");
  };

  const handleRefreshLocalStorage = () => {
    props.handleRefreshLocalStorage();
    setCardSetSelected("new");
    updatePaperValues("new");
  };

  const handleSettingsTextChange = (event) => {
    setSettingsText(event.target.value);
  };

  const handleOpenLocalStorageDialog = () => {
    setLocalDialogOpen(true);
    setSettingsText(localStorage.getItem("flashcardSettingsString"))
  };

  const handleLocalStorageDialogClose = (value) => {
    setLocalDialogOpen(false);
    if (value === "add") {
      localStorage.setItem("flashcardSettingsString", settingsText);
      props.handleLocalStorageDialogClose();
    };
  };

  return (
    <SwipeableDrawer anchor="right" open={props.rightDrawer} onClose={() => props.handleRightDrawer(false)} onOpen={() => props.handleRightDrawer(true)} classes={{ paper: classes.paper }}>
      <Container>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} style={{ paddingTop: "30px", width: 100 }}>
            <FormControl className={classes.formControl}>
              <Select
                value={cardSetSelected}
                onChange={handleCardSetChange}
                displayEmpty
              >
                <MenuItem key="new" value="new">
                  <em>New Card Set</em>
                </MenuItem>
                {props.fullCardSets.map((cardSet, num) => {
                  return (
                    <MenuItem key={num} value={num}>{cardSet.cardSetName}</MenuItem>
                  )
                })}
              </Select>
              <FormHelperText>Choose your card set</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <CardSetPaper
              cardSetSelected={cardSetSelected}
              cardSetName={cardSetName}
              cardSetNameError={cardSetNameError}
              handleCardSetNameChange={handleCardSetNameChange}
              frontCard={frontCard}
              frontCardError={frontCardError}
              handleFrontCardChange={handleFrontCardChange}
              backCard={backCard}
              backCardError={backCardError}
              handleBackCardChange={handleBackCardChange}
              frontValue={frontValue}
              frontValueError={frontValueError}
              handleFrontValueChange={handleFrontValueChange}
              backValue={backValue}
              backValueError={backValueError}
              handleBackValueChange={handleBackValueChange}
              cardValues={cardValues}
              selectedCardValue={selectedCardValue}
              handleAddCard={handleAddCard}
              handleCardValueClick={handleCardValueClick}
              handleDeleteCardValue={handleDeleteCardValue}
              handleReplaceCard={handleReplaceCard}
              tag={tag}
              tagError={tagError}
              handleTagChange={handleTagChange}
              tagValues={tagValues}
              handleAddTag={handleAddTag}
              handleDeleteTag={handleDeleteTag}
              handleSubmitCardSet={handleSubmitCardSet}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={props.handleDownloadSettings} startIcon={<GetAppIcon />}>
              Download card sets & settings
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={props.handleSaveLocalStorage} startIcon={<SaveIcon />}>
              Save to local storage
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleRefreshLocalStorage} startIcon={<RefreshIcon />}>
              Refresh from local storage
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleOpenLocalStorageDialog} startIcon={<LaunchIcon />}>
              Add manually to local storage
            </Button>
          </Grid>
          <Dialog onClose={handleLocalStorageDialogClose} open={localDialogOpen}>
            <DialogTitle>Edit your flashcardSettings directly in localStorage</DialogTitle>
            <DialogContent>
              <DialogContentText>
                If you have a JSON file which you would like to make use of, open it and copy/paste the text into here and click
                "add" to add to your localStorage variables. To then make use of the settings, use the "refresh from local storage" button.
              </DialogContentText>
              <TextField
                autoFocus
                fullWidth
                label="flashcardSettings JSON"
                id="settings"
                autoComplete="off"
                multiline
                value={settingsText}
                onChange={handleSettingsTextChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleLocalStorageDialogClose(null)} color="primary">
                Cancel
              </Button>
              <Button onClick={() => handleLocalStorageDialogClose("add")} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        {["new", "updated", "saved", "refresh", "not refreshed", "manually saved"].map((status) => {
          return (
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={props.successAlert === status}
              onClose={props.handleSuccessClose}
              autoHideDuration={3000}
              key={status}
            >
              <MuiAlert key={status} elevation={6} variant="filled" onClose={props.handleSuccessClose} severity={status !== "not refreshed" ? "success" : "error"}>
                {
                  (status === "new") ?
                    "New card set added!"
                    : (status === "updated") ?
                      "Card set successfully updated!"
                      : (status === "saved") ?
                        "Saved to localStorage!"
                        : (status === "refresh") ?
                          "Settings refreshed from localStorage!"
                          : (status === "not refreshed") ?
                            "Problem with localStorage. Nothing saved or incorrect format!"
                            : "Manual update of localStorage successful!"
                }
              </MuiAlert>
            </Snackbar>
          )
        })
        }
      </Container>
    </SwipeableDrawer>
  )
};

function TestParameters(props) {

  return (
    <Grid item xs={12} container alignItems="center">
      <Grid item xs={8}>
        <Typography variant="subtitle1" color="textPrimary">
          Ordering
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Tooltip title="In order">
          <IconButton onClick={() => props.handleOrdering("ordered")}>
            <LoopIcon color={props.ordering === "ordered" ? "secondary" : "disabled"} />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={2}>
        <Tooltip title="Shuffle">
          <IconButton onClick={() => props.handleOrdering("shuffle")}>
            <ShuffleIcon color={props.ordering === "shuffle" ? "secondary" : "disabled"} />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1" color="textPrimary">
          Card direction
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Tooltip title="Show the front of the card first">
          <IconButton onClick={() => props.handleFrontToBack("frontFirst")}>
            <ArrowForwardIcon color={props.frontToBack === "frontFirst" ? "secondary" : "disabled"} />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={2}>
        <Tooltip title="Show the back of the card first">
          <IconButton onClick={() => props.handleFrontToBack("backFirst")}>
            <ArrowBackIcon color={props.frontToBack === "backFirst" ? "secondary" : "disabled"} />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={2}>
        <Tooltip title="Mix between front and back">
          <IconButton onClick={() => props.handleFrontToBack("mixed")}>
            <CompareArrowsIcon color={props.frontToBack === "mixed" ? "secondary" : "disabled"} />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
};

function ChooseCardSets(props) {
  const classes = useStyles();
  const [search, setSearch] = React.useState("");
  const [front, setFront] = React.useState([]);
  const [back, setBack] = React.useState([]);
  const [tagText, setTagText] = React.useState("");
  const [selectedTags, setSelectedTags] = React.useState([]);

  const filterCardSets = (fullCardSets) => {
    let filteredSets = fullCardSets.map((cardSet, num) => { return ({ ...cardSet, fullIndex: num }) });
    filteredSets = filteredSets.filter(cardSet => cardSet.cardSetName.toLowerCase().includes(search));
    filteredSets = filteredSets.filter(cardSet => front.length === 0 || front.indexOf(cardSet.frontCard) !== -1);
    filteredSets = filteredSets.filter(cardSet => back.length === 0 || back.indexOf(cardSet.backCard) !== -1);
    filteredSets = filteredSets.filter(cardSet => selectedTags.length === 0 || selectedTags.some(tag => cardSet.tagValues.indexOf(tag) !== -1))
    return filteredSets;
  }
  // Below is not a state value but we store it in a variable for convenience.
  const showingCardSets = filterCardSets(props.fullCardSets);

  const filteredTags = props.tagList.filter(tag => tag.includes(tagText));

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFrontChange = (event) => {
    setFront(event.target.value);
  };

  const handleBackChange = (event) => {
    setBack(event.target.value);
  };

  const handleTagTextChange = (event) => {
    setTagText(event.target.value);
  };

  const handleTagClick = (tag, selected) => {
    const newSelectedTags = selectedTags.slice()
    if (selected) {
      newSelectedTags.push(tag)
    } else {
      newSelectedTags.splice(newSelectedTags.indexOf(tag), 1)
    }
    setSelectedTags(newSelectedTags);
  };

  const handleSelectAll = () => {
    if (showingCardSets.some(cardSet => props.selectedCardSets.indexOf(cardSet.fullIndex) === -1)) {
      const newSelectedCardSets = [...new Set([...props.selectedCardSets, ...showingCardSets.map((cardSet) => cardSet.fullIndex)])];
      props.handleSelectAll(newSelectedCardSets);
    } else {
      const newSelectedCardSets = props.selectedCardSets.filter(idx => showingCardSets.map((cardSet) => cardSet.fullIndex).indexOf(idx) === -1);
      props.handleSelectAll(newSelectedCardSets);
    };
  };

  const handleClearFilters = () => {
    setSearch("");
    setFront([]);
    setBack([]);
    setTagText("");
    setSelectedTags([]);
  };

  return (
    <Grid item xs={12} container alignItems="center">
      <Grid item xs={10}>
        <Typography variant="subtitle2" color="textPrimary">
          Choose your card set(s) using the search and filters below
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Tooltip title="Clear filters">
          <IconButton onClick={handleClearFilters}>
            <FilterListIcon color={search !== "" || front.length !== 0 || back.length !== 0 || selectedTags.length !== 0 ? "secondary" : "disabled"} />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid container item xs={12} sm={6} spacing={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="search"
              label="Search"
              autoComplete="off"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              helperText="Use this to search the card set names."
              value={search}
              onChange={handleSearchChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel>Front</InputLabel>
              <Select
                multiple
                value={front}
                onChange={handleFrontChange}
                input={<Input />}
              //MenuProps={MenuProps}
              >
                {props.frontList.map((front) => (
                  <MenuItem key={front} value={front}>
                    {front}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel>Back</InputLabel>
              <Select
                multiple
                value={back}
                onChange={handleBackChange}
                input={<Input />}
              //MenuProps={MenuProps}
              >
                {props.backList.map((back) => (
                  <MenuItem key={back} value={back}>
                    {back}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6} spacing={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Tags"
              id="tags"
              autoComplete="off"
              value={tagText}
              onChange={handleTagTextChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.chippaper} variant="outlined">
              {filteredTags.map((tag) => {
                return (
                  <Chip
                    key={tag}
                    size="small"
                    label={tag}
                    onClick={() => handleTagClick(tag, true)}
                    onDelete={() => handleTagClick(tag, false)}
                    deleteIcon={selectedTags.indexOf(tag) !== -1 ? <CancelIcon /> : <DoneIcon />}
                    color={selectedTags.indexOf(tag) !== -1 ? "secondary" : "default"}
                  />
                )
              })}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <List>
          <ListItem button dense divider onClick={handleSelectAll}>
            <ListItemIcon>
              <Checkbox
                checked={showingCardSets.length > 0 && showingCardSets.every(cardSet => props.selectedCardSets.indexOf(cardSet.fullIndex) !== -1)}
                disableRipple />
            </ListItemIcon>
            <ListItemText primary="Select all" />
            <ListItemSecondaryAction>
              <Tooltip title="Delete selected">
                <IconButton edge="end" onClick={props.handleDeleteSelected}>
                  <DeleteIcon color={props.selectedCardSets.length === 0 ? "disabled" : "secondary"} />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <List style={{ maxHeight: "50vh", overflow: "auto" }}>
          {showingCardSets.map((cardSet) => {
            return (
              <ListItem key={cardSet.fullIndex} button dense onClick={props.handleCardSetSelected(cardSet.fullIndex)}>
                <ListItemIcon>
                  <Checkbox
                    checked={props.selectedCardSets.indexOf(cardSet.fullIndex) !== -1}
                    disableRipple />
                </ListItemIcon>
                <ListItemText primary={cardSet.cardSetName} secondary={cardSet.frontCard + " ↔ " + cardSet.backCard} />
              </ListItem>
            )
          })}
        </List>
      </Grid>
    </Grid>
  )
};

function TestConfigDrawer(props) {
  const classes = useStyles();

  return (
    <SwipeableDrawer anchor="left" open={props.leftDrawer} onClose={() => props.handleLeftDrawer(false)} onOpen={() => props.handleLeftDrawer(true)} classes={{ paper: classes.paper }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} container justifyContent="flex-end" style={{ padding: "5px" }}>
            <Button variant="contained" color="primary" onClick={props.handleTestCardSetSelected}>
              Start new test
            </Button>
          </Grid>
          <TestParameters
            ordering={props.ordering}
            handleOrdering={props.handleOrdering}
            frontToBack={props.frontToBack}
            handleFrontToBack={props.handleFrontToBack}
          />
          <ChooseCardSets
            fullCardSets={props.fullCardSets}
            frontList={[...new Set(props.fullCardSets.map((cardSet) => cardSet.frontCard))]}
            backList={[...new Set(props.fullCardSets.map((cardSet) => cardSet.backCard))]}
            tagList={[...new Set([].concat.apply([], props.fullCardSets.map((cardSet) => cardSet.tagValues)))]}
            handleDeleteSelected={props.handleDeleteSelected}
            selectedCardSets={props.selectedCardSets}
            handleCardSetSelected={props.handleCardSetSelected}
            handleSelectAll={props.handleSelectAll}
          />
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={props.testAlert === "select"}
          onClose={props.handleTestAlertClose}
          autoHideDuration={3000}
        >
          <MuiAlert elevation={6} variant="filled" onClose={props.handleTestAlertClose} severity="info">
            Nothing selected. Choose some card sets to get started!
          </MuiAlert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={props.testAlert === "empty"}
          onClose={props.handleTestAlertClose}
          autoHideDuration={5000}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={props.handleTestAlertClose}
            severity="info"
            action={
              <Button variant="contained" onClick={props.handleTestAlertCreate} color="default">
                Create
              </Button>
            }>
            You don't have any card sets. Create/load some using the menu up here!
          </MuiAlert>
        </Snackbar>
      </Container>
    </SwipeableDrawer>
  )
};

function TestCompletedDialog(props) {

  return (
    <Dialog onClose={props.handleCompletedClose} open={props.open}>
      <DialogTitle>Card set completed!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Cards reviewed: {props.numcards}
          <br />Marked correct: {props.numcorrect}
          <br />Marked incorrect: {props.numincorrect}
          <br />Score (marked): {props.numcorrect === 0 ? 0 : Math.round(100 * props.numcorrect / (props.numcorrect + props.numincorrect))}%
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleCompletedClose("review")} color="primary" disabled={props.numincorrect === 0}>
          Review incorrect cards
        </Button>
      </DialogActions>
      <DialogActions>
        <Button onClick={() => props.handleCompletedClose("new")} color="primary">
          New test
        </Button>
        <Button onClick={() => props.handleCompletedClose("restart")} color="primary">
          Restart test
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function HelpBackdrop(props) {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={props.helpOpen} onClick={() => props.handleHelpOpen(false)}>

      <Container maxWidth="lg" className={classes.root} style={{ paddingTop: "64px" }}>
        <Grid container alignItems="stretch" style={{ height: "100%" }}>
          <Grid container>
            <Grid item xs={6} container>
              <Grid item xs={1} container justifyContent="center">
                <ArrowUpwardIcon />
              </Grid>
              <Grid item xs={10} sm={7}>
                <Typography variant="subtitle1">
                  Use this menu to select which card sets you want to test,
                  which order you want to see the cards in (ordered/shuffled), whether front
                  first or back first, and also delete card sets from this menu.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} container justifyContent="flex-end" alignItems="baseline">
              <Grid item xs={10} sm={7}>
                <Typography variant="subtitle1">
                  Use this menu create new card sets or modify existing card sets.
                </Typography>
              </Grid>
              <Grid item xs={1} container justifyContent="center">
                <ArrowUpwardIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">
                Tap the main card area to flip between the front and back of the card.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">
                Use the navigation buttons to move forwards or backwards through your test card set and mark yourself as correct or incorrect (hover for more info).
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">
                The bottom area keeps track of your progress through the card set and updates as you go.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

      </Container>
    </Backdrop >
  )
}

function App(props) {
  const classes = useStyles();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  theme.typography.h1 = {
    fontSize: '3rem',
    fontWeight: 400,
    '@media (min-width:600px)': {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    },
  };

  const localFlashcardSettings = JSON.parse(localStorage.getItem("flashcardSettingsString"));

  const [leftDrawer, setLeftDrawer] = React.useState(false);
  const [rightDrawer, setRightDrawer] = React.useState(false);
  const [ordering, setOrdering] = React.useState(localFlashcardSettings === null ? flashcardSettings.ordering : (localFlashcardSettings.ordering ? localFlashcardSettings.ordering : flashcardSettings.ordering));
  const [frontToBack, setFrontToBack] = React.useState(localFlashcardSettings === null ? flashcardSettings.frontToBack : (localFlashcardSettings.frontToBack ? localFlashcardSettings.frontToBack : flashcardSettings.frontToBack));
  const [fullCardSets, setFullCardSets] = React.useState(localFlashcardSettings === null ? flashcardSettings.fullCardSets : (localFlashcardSettings.fullCardSets ? localFlashcardSettings.fullCardSets : flashcardSettings.fullCardSets));
  const [selectedCardSets, setSelectedCardSets] = React.useState([]);
  const [testCardSet, setTestCardSet] = React.useState([]);
  const [showFront, setShowFront] = useState(localFlashcardSettings === null ? flashcardSettings.frontToBack !== "backFirst" : (localFlashcardSettings.frontToBack ? localFlashcardSettings.frontToBack !== "backFirst" : flashcardSettings.frontToBack !== "backFirst"));
  const [progress, setProgress] = React.useState(0);
  const [testCompletedOpen, setTestCompletedOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [successAlert, setSuccessAlert] = useState(null);
  const [testAlert, setTestAlert] = useState(null);

  const correctCards = testCardSet.filter(cardSet => cardSet.correct === true).length;
  const incorrectCards = testCardSet.filter(cardSet => cardSet.correct === false).length;

  const handleSubmitCardSet = (newCardSet, cardSetSelected) => {
    const newFullCardSets = fullCardSets.slice();
    if (cardSetSelected === "new") {
      newFullCardSets.push(newCardSet);
    } else {
      newFullCardSets.splice(cardSetSelected, 1, newCardSet);
    };
    setFullCardSets(newFullCardSets);
  };

  const handleDownloadSettings = () => {
    const blob = new Blob([JSON.stringify({ ordering: ordering, frontToBack: frontToBack, fullCardSets: fullCardSets })], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = "flashcardSettings.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveLocalStorage = () => {
    const settingsString = JSON.stringify({ ordering: ordering, frontToBack: frontToBack, fullCardSets: fullCardSets });
    localStorage.setItem("flashcardSettingsString", settingsString);
    setSuccessAlert("saved");
  };

  const handleRefreshLocalStorage = () => {
    const localFlashcardSettings = JSON.parse(localStorage.getItem("flashcardSettingsString"));
    if (localFlashcardSettings !== null) {
      try {
        setOrdering(localFlashcardSettings.ordering);
        setFrontToBack(localFlashcardSettings.frontToBack);
        setFullCardSets(localFlashcardSettings.fullCardSets);
        setShowFront(localFlashcardSettings.frontToBack !== "backFirst");
        setSuccessAlert("refresh");
        return;
      } catch (err) {
        console.log(err);
      };
    }
    setSuccessAlert("not refreshed");
  };

  const handleLocalStorageDialogClose = () => {
    setSuccessAlert("manually saved");
  };

  const handleDeleteSelected = () => {
    const newFullCardSets = fullCardSets.filter((cardSet, num) => selectedCardSets.indexOf(num) === -1)
    setFullCardSets(newFullCardSets);
    setSelectedCardSets([]);
  };

  const handleCardSetSelected = (value) => () => {
    const currentIndex = selectedCardSets.indexOf(value);
    const newSelectedCardSets = selectedCardSets.slice();

    if (currentIndex === -1) {
      newSelectedCardSets.push(value);
    } else {
      newSelectedCardSets.splice(currentIndex, 1);
    }

    setSelectedCardSets(newSelectedCardSets);
  };

  const handleSelectAll = (newSelectedCardSets) => {
    setSelectedCardSets(newSelectedCardSets);
  };

  const handleLeftDrawer = (value) => {
    setLeftDrawer(value);
  };

  const handleRightDrawer = (value) => {
    setRightDrawer(value);
  };

  const handleTestCardSetSelected = () => {
    let newTestCardSet = fullCardSets.filter((cardSet, idx) => selectedCardSets.indexOf(idx) !== -1);
    newTestCardSet = [].concat.apply([], newTestCardSet.map(cardSet => cardSet.cardValues.map(values => { return ({ ...values, cardSetName: cardSet.cardSetName, frontCard: cardSet.frontCard, backCard: cardSet.backCard, correct: null }) })))
    if (ordering === "shuffle") {
      // Carry out the Fisher-Yates (Knuth) shuffle.
      let n = newTestCardSet.length, i;

      // While there are still elements to shuffle.
      while (n) {

        // Random index
        i = Math.floor(Math.random() * n--);

        // Swap with end element
        [newTestCardSet[n], newTestCardSet[i]] = [newTestCardSet[i], newTestCardSet[n]]

      };
    }
    setTestCardSet(newTestCardSet);
    setShowFront(frontToBack === "frontFirst" ? true : (frontToBack === "backFirst" ? false : Math.random() < 0.5));
    setProgress(0);
    if (fullCardSets.length === 0) {
      setTestAlert("empty");
    } else if (newTestCardSet.length === 0) {
      setTestAlert("select");
    } else {
      setLeftDrawer(false);
    };
  };

  const handleProgressChange = (value) => {
    // Doing this way so that it can be generalised in future (e.g. might set value to be equal to the length of the testSets for skipping to start/end)
    let newProgress;
    if (value < 0) {
      newProgress = Math.max(0, progress + value);
    } else {
      newProgress = Math.min(testCardSet.length - 1, progress + value);
    };
    if (newProgress !== progress) {
      setShowFront(frontToBack === "frontFirst" ? true : (frontToBack === "backFirst" ? false : Math.random() < 0.5));
    } else if (value > 0 && testCardSet.length > 0) {
      setTestCompletedOpen(true);
    };
    setProgress(newProgress);
  };

  const handleShowFront = () => {
    setShowFront(!showFront);
  };

  const handleCorrectChange = (isCorrect) => {
    if (testCardSet.length === 0) {
      return;
    }
    const newTestCardSet = testCardSet.slice();
    newTestCardSet.splice(progress, 1, { ...testCardSet[progress], ...{ correct: isCorrect } });
    setTestCardSet(newTestCardSet);
    // We move to the next card as long as it's a "positive action" (rather than corrective)
    if (isCorrect !== null) {
      handleProgressChange(1);
    }
  };

  const handleCompletedClose = (value) => {
    setTestCompletedOpen(false);
    if (value === "new") {
      setLeftDrawer(true);
    } else if (value === "restart") {
      handleTestCardSetSelected();
    } else if (value === "review") {
      const newTestCardSet = testCardSet.filter(cardSet => cardSet.correct === false);
      setTestCardSet(newTestCardSet);
      setShowFront(frontToBack === "frontFirst" ? true : (frontToBack === "backFirst" ? false : Math.random() < 0.5));
      setProgress(0);
    }
  };

  const handleHelpOpen = (value) => {
    setHelpOpen(value);
  };

  const handleTestAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      setTestAlert(null); // could just have one line but leaving in this format in case we want to change in future.
      return;
    }
    setTestAlert(null);
  };

  const handleTestAlertCreate = () => {
    setTestAlert(null);
    setLeftDrawer(false);
    setRightDrawer(true);
  };

  const handleSuccessAlert = (value) => {
    setSuccessAlert(value);
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      //setSuccessAlert(null);
      return;
    }
    setSuccessAlert(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Container maxWidth="lg" className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Grid container>
                <Grid item xs={5} container alignItems="center" justifyContent="flex-start">
                  <IconButton edge="start" onClick={() => setLeftDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6">
                    Test config
                  </Typography>
                </Grid>
                <Grid item xs={2} container alignItems="center" justifyContent="center">
                  <IconButton edge="start" onClick={() => setHelpOpen(!helpOpen)}>
                    <HelpIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={5} container alignItems="center" justifyContent="flex-end">
                  <Typography variant="h6">
                    Card sets
                  </Typography>
                  <IconButton edge="end" onClick={() => setRightDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <HelpBackdrop
            helpOpen={helpOpen}
            handleHelpOpen={handleHelpOpen}
          />
          <TestConfigDrawer
            leftDrawer={leftDrawer}
            handleLeftDrawer={handleLeftDrawer}
            ordering={ordering}
            handleOrdering={(order) => setOrdering(order)}
            frontToBack={frontToBack}
            handleFrontToBack={(fTB) => setFrontToBack(fTB)}
            fullCardSets={fullCardSets}
            handleDeleteSelected={handleDeleteSelected}
            selectedCardSets={selectedCardSets}
            handleCardSetSelected={handleCardSetSelected}
            handleSelectAll={handleSelectAll}
            handleTestCardSetSelected={handleTestCardSetSelected}
            testAlert={testAlert}
            handleTestAlertClose={handleTestAlertClose}
            handleTestAlertCreate={handleTestAlertCreate}
          />
          <CardSetsDrawer
            rightDrawer={rightDrawer}
            handleRightDrawer={handleRightDrawer}
            handleSubmitCardSet={handleSubmitCardSet}
            fullCardSets={fullCardSets}
            successAlert={successAlert}
            handleSuccessAlert={handleSuccessAlert}
            handleSuccessClose={handleSuccessClose}
            handleDownloadSettings={handleDownloadSettings}
            handleSaveLocalStorage={handleSaveLocalStorage}
            handleRefreshLocalStorage={handleRefreshLocalStorage}
            handleLocalStorageDialogClose={handleLocalStorageDialogClose}
          />
          <Container maxWidth="sm" style={{ height: "calc(100vh - 64px)" }}>
            <Grid container spacing={2} alignItems="center" style={{ height: "100%" }}>
              <Grid item xs={12} style={{ height: "70%" }}>
                <Flashcard
                  frontCard={testCardSet.length === 0 ? "Front of card" : testCardSet[progress].frontCard}
                  backCard={testCardSet.length === 0 ? "Back of card" : testCardSet[progress].backCard}
                  frontValue={testCardSet.length === 0 ? "Front value" : testCardSet[progress].frontValue}
                  backValue={testCardSet.length === 0 ? "Back value" : testCardSet[progress].backValue}
                  cardSetName={testCardSet.length === 0 ? "Card set name" : testCardSet[progress].cardSetName}
                  showFront={showFront}
                  handleShowFront={handleShowFront}
                  handleProgressChange={handleProgressChange}
                  correct={testCardSet.length === 0 ? null : testCardSet[progress].correct}
                  handleCorrectChange={handleCorrectChange}
                  theme={theme}
                />
              </Grid>
              <Grid item xs={12} container alignItems="center" spacing={1}>
                <Grid item xs={10}>
                  <LinearProgress variant="determinate" value={testCardSet.length === 0 ? 0 : 100 * (progress + 1) / testCardSet.length} />
                </Grid>
                <Grid item xs={2} container justifyContent="flex-end">
                  <Typography variant="body2" color="textSecondary">
                    {`${testCardSet.length === 0 ? 0 : progress + 1} / ${testCardSet.length}`}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} container alignItems="center" spacing={1}>
                <Grid item xs={5} container justifyContent="flex-end">
                  <CancelIcon color="primary" />
                </Grid>
                <Grid item xs={1} container justifyContent="flex-start">
                  <Typography variant="body2" color="textSecondary">
                    {`: ${incorrectCards}`}
                  </Typography>
                </Grid>
                <Grid item xs={2} container justifyContent="flex-end">
                  <CheckCircleIcon color="primary" />
                </Grid>
                <Grid item xs={2} container justifyContent="flex-start">
                  <Typography variant="body2" color="textSecondary">
                    {`: ${correctCards}`}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2" color="textSecondary">
                    {correctCards + incorrectCards === 0 ? "n/a" : `${Math.round(100 * correctCards / (correctCards + incorrectCards))}%`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <TestCompletedDialog
              open={testCompletedOpen}
              numcards={testCardSet.length}
              numcorrect={correctCards}
              numincorrect={incorrectCards}
              handleCompletedClose={handleCompletedClose}
            />
          </Container>
        </Container >
      </Paper>
    </ThemeProvider>
  )
}

export default App
