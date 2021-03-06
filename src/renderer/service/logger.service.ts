/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */

import { LoggerServiceInterface } from "shared/service/logger.service.interface";

const { ipcRenderer } = window.electron

class LoggerService implements LoggerServiceInterface {
  public silly(...args: unknown[]) {
    ipcRenderer.sendMessage('LoggerService:silly', args);
    console.log(...args)
  }

  public debug(...args: unknown[]) {
    ipcRenderer.sendMessage('LoggerService:debug', args);
    console.debug(...args)
  }

  public trace(...args: unknown[]) {
    ipcRenderer.sendMessage('LoggerService:trace', args);
    console.trace(...args)
  }

  public info(...args: unknown[]) {
    ipcRenderer.sendMessage('LoggerService:info', args);
    console.info(...args)
  }

  public warn(...args: unknown[]) {
    ipcRenderer.sendMessage('LoggerService:warn', args);
    console.warn(...args)
  }

  public error(...args: unknown[]) {
    ipcRenderer.sendMessage('LoggerService:error', args);
    console.error(...args)
  }

  public fatal(...args: unknown[]) {
    ipcRenderer.sendMessage('LoggerService:fatal', args);
  }

  public openLog() {
    return ipcRenderer.sendMessage('LoggerService:openLog')
  }
}

const defaultLogger = new LoggerService()

export default defaultLogger
