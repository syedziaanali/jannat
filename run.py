#!/usr/bin/env python3
"""
======================================================================
  If You Ever Forget How Much I Love You ❤️
  Dedicated to Jannat, from Ziaan
======================================================================

This Python script easily launches the romantic website on your local machine.
You can run it in two ways:
  1. python run.py          (Starts the Vite Dev server with live editing)
  2. python run.py --static (Serves the pre-built 'dist' folder with Python)
"""

import sys
import os
import subprocess
import time
import webbrowser
import shutil
from pathlib import Path

# Set working directory to this script's directory
PROJECT_ROOT = Path(__file__).resolve().parent
os.chdir(PROJECT_ROOT)

BANNER = r"""
  ╔══════════════════════════════════════════════════════════════════╗
  ║                                                                  ║
  ║             If You Ever Forget How Much I Love You  ❤️          ║
  ║                                                                  ║
  ║                   Dedicated to Jannat, from Ziaan                ║
  ║                                                                  ║
  ╚══════════════════════════════════════════════════════════════════╝
"""

def print_banner():
    print(BANNER)

def is_tool_available(tool_name):
    """Check if command-line tool is accessible."""
    return shutil.which(tool_name) is not None

def run_static_server(port=3000):
    """Serve the 'dist' directory using Python's built-in HTTP server."""
    dist_dir = PROJECT_ROOT / "dist"
    
    if not dist_dir.exists():
        print("❌ 'dist' directory not found.")
        print("💡 Building the project first...")
        build_project()
        
    print(f"\n✨ Serving production build from /dist on http://localhost:{port}...")
    import http.server
    import socketserver
    
    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(dist_dir), **kwargs)

    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    
    url = f"http://localhost:{port}"
    print(f"🚀 Opening {url} in your browser...")
    webbrowser.open(url)
    
    print("\n[Ctrl + C to stop the server]")
    with socketserver.TCPServer(("", port), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped with care. Have a peaceful day!")

def build_project():
    """Build the production assets using npm run build."""
    npm_cmd = "npm.cmd" if os.name == "nt" else "npm"
    print("📦 Building production bundle...")
    res = subprocess.run([npm_cmd, "run", "build"], shell=True)
    if res.returncode != 0:
        print("❌ Build failed. Please verify dependencies.")
        sys.exit(1)

def run_dev_server():
    """Run standard Vite development server."""
    npm_cmd = "npm.cmd" if os.name == "nt" else "npm"
    
    # 1. Check Node & npm
    if not is_tool_available(npm_cmd) and not is_tool_available("npm"):
        print("⚠️  'npm' not found in PATH.")
        print("🔄 Falling back to Python static server from 'dist'...")
        run_static_server()
        return

    # 2. Check if node_modules exists
    node_modules = PROJECT_ROOT / "node_modules"
    if not node_modules.exists():
        print("📦 First-time setup: Installing required packages...")
        subprocess.run([npm_cmd, "install"], shell=True, check=True)
        print("✅ Packages installed successfully!\n")

    # 3. Launch Vite server
    print("🚀 Starting Vite development server...")
    url = "http://localhost:3000"
    
    # Schedule browser opening after short delay for server startup
    def open_browser_later():
        time.sleep(1.8)
        print(f"🌐 Opening {url} in your browser...")
        webbrowser.open(url)

    import threading
    browser_thread = threading.Thread(target=open_browser_later, daemon=True)
    browser_thread.start()

    print("\n[Press Ctrl + C in this terminal to stop]")
    try:
        # Run Vite dev command
        subprocess.run([npm_cmd, "run", "dev"], shell=True)
    except KeyboardInterrupt:
        print("\n👋 Stopped server. Always wishing you and Jannat peace and warmth!")

if __name__ == "__main__":
    print_banner()

    # Check for CLI flags
    if len(sys.argv) > 1 and sys.argv[1] in ("--static", "-s"):
        run_static_server()
    elif len(sys.argv) > 1 and sys.argv[1] in ("--build", "-b"):
        build_project()
    else:
        run_dev_server()
