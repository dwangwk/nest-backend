import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UseInterceptors, UploadedFiles, Put, Req, Res, Query } from "@nestjs/common";
import { Video } from "../model/video.schema"
import { VideoService } from "../video.service";
import { FileFieldsInterceptor, FilesInterceptor } from "@nestjs/platform-express";

