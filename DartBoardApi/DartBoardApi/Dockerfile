FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["DartBoardApi/DartBoardApi.csproj", "DartBoardApi/"]
RUN dotnet restore "DartBoardApi/DartBoardApi.csproj"
COPY . .
WORKDIR "/src/DartBoardApi"
RUN dotnet build "DartBoardApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "DartBoardApi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "DartBoardApi.dll"]